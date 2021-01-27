import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordUseCase } from 'src/app/domain/security/usecase/forgot-password.usecase';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public keyField = [
    {"field": "email", "text": "Correo electrónico"}
  ];
  public keyValidators = [
    {"field": "required", "text": "Requerido"}
  ];

  public submit: any;
  public formGroup: FormGroup = null;
  
  constructor(
    private forgotPasswordUseCase: ForgotPasswordUseCase,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    const that = this;
    
    that.formGroup = that.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
    
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
        title: 'Error',
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

    that.forgotPasswordUseCase.execute({
      username: this.formGroup.get('email').value
    }).subscribe( res => {
      
      Swal.fire({
        title: 'Success',
        html: res.data['message'],
        timerProgressBar: true,
        icon: 'success',
        timer: 5000
      }).then((result) => {
        console.log(res.data['message']);
        that.submit = false;
        that.formGroup.reset();
        that.router.navigateByUrl('/security/login');
      });

    }, (error) => {

    });
  }

  onReturn() {
    const that = this;
    that.router.navigateByUrl('/security/login');
  }

}
