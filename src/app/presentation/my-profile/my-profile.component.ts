import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangePasswordUseCase } from 'src/app/domain/security/usecase/change-password.usecase';
import { MustMatch } from 'src/app/shared/helpers/must-match.validator';
import { InitFunctionJsService } from 'src/app/shared/services/init-function-js.service';
declare var jquery: any;
declare var $: any;
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  submit = false;
  public formGroup: FormGroup = null;
  public keyField = [
    {"field": "oldPassword", "text": "Antigua contraseña"}, 
    {"field": "newPassword", "text": "Nueva contraseña"},
    {"field": "confirmPassword", "text": "Confirmar nueva contraseña"}
  ];
  public keyValidators = [
    {"field": "required", "text": "Requerido"},
    {"field": "mustMatch", "text": "No coincide"}
  ];  

  constructor(
    private initFunctionJsService: InitFunctionJsService, 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private changePasswordUseCase: ChangePasswordUseCase
  ) { }

  ngOnInit(): void {
    const that = this;
    that.formGroup = that.formBuilder.group({
      oldPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validators: MustMatch('newPassword', 'confirmPassword')
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
            console.log(keyError);
            messageLst += '<li>'+that.keyField.find(f => f.field == key).text + ': ' + that.keyValidators.find(f => f.field == keyError).text + '</li>';
          });
        }
     });
     messageLst += '</ul>';
     return messageLst;
  }

  onSubmit() {
    
    const that = this;
    const message = that.getFormValidationErrors();

    that.submit = true;
    
    if(!that.formGroup.valid) {
      that.submit = false;
      Swal.fire({
        // title: 'Error',
        html: message,
        timerProgressBar: true,
        icon: 'error',
        timer: 5000,
      }).then((result) => {
        that.submit = false;
      });
      return;
    }

    that.changePasswordUseCase.execute({
      "oldPassword": that.formGroup.get('oldPassword').value,
      "newPassword": that.formGroup.get('newPassword').value
    }).subscribe( res => {

      Swal.fire({
        // title: 'Ok',
        html: res.data.message,
        timerProgressBar: true,
        icon: 'success',
        timer: 5000
      }).then((result) => {
        that.submit = false;
        that.formGroup.reset();
        that.router.navigateByUrl('/exams/available');
      });
    }, (error) => {
      that.submit = false;
    });
    
  }
  
  ngAfterViewInit(): void {
    const that = this;
    that.initFunctionJsService.executeFunction();
  }

  onReturn() {
    const that = this;
    that.router.navigateByUrl('/exams/available');
  }

  get f() { return this.formGroup.controls; }
}
