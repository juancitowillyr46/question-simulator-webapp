import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { SignInUseCase } from '../../domain/security/usecase/signin.usecase';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public keyField = [
    {"field": "username", "text": "Usuario"}, 
    {"field": "password", "text": "Contraseña"}
  ];
  public keyValidators = [
    {"field": "required", "text": "Requerido"}
  ];  

  @Input() public dataModal: any = null;
  public submit: any;
  public formGroup: FormGroup = null;


  constructor(
    private formBuilder: FormBuilder,
    private signInUserCase: SignInUseCase,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    const that = this;
    

    localStorage.removeItem('accessToken');

    that.formGroup = that.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    
    //console.log(this.dataModal);

  }

  getFormValidationErrors() {
    const that = this;
    let messageLst = '';
    messageLst += '<ul class="text-left" style="font-size: 15px;">';
    Object.keys(this.formGroup.controls).forEach(key => {
        const controlErrors: ValidationErrors = this.formGroup.get(key).errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            messageLst += '<li>'+that.keyField.find(f => f.field == key).text + ': ' + that.keyValidators.find(f => f.field == keyError).text + '</li>';
          });
        }
     });
     messageLst += '</ul>';
     return messageLst;
  }
  

  onSubmit() {

    const that = this;

    that.submit = true;

    const message = that.getFormValidationErrors();

    if(!that.formGroup.valid) {
      that.submit = false;
      Swal.fire({
        // title: 'Error',
        html: message,
        timerProgressBar: true,
        icon: 'error',
        timer: 5000
      }).then((result) => {
        /* Read more about handling dismissals below */
        that.submit = false;
      });
      
      return;
    }

    that.signInUserCase.execute(that.formGroup.value).subscribe( res => {
      that.formGroup.reset();
      that.submit = false;

      localStorage.removeItem('accessToken');
      localStorage.setItem('accessToken', res['data']['token']);

      if(this.dataModal && this.dataModal.isExpiredToken){
        location.reload();
      } else {
        that.router.navigateByUrl('/exams/available');
      }
      
      
    }, (error) => {
      that.submit = false;
    });
    

  }

  onLogout() {
    const that = this;
    that.modalService.dismissAll('');
    that.router.navigateByUrl('/security/login');
    localStorage.removeItem('accessToken');
  }
}
