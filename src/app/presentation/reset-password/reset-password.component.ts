import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ResetPasswordUseCase } from 'src/app/domain/security/usecase/reset-password.usecase';
import { MustMatch } from 'src/app/shared/helpers/must-match.validator';
import { ResetPasswordObservable } from 'src/app/shared/observables/reset-password.observable';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  submit = false;
  verifyToken = true;
  public formGroup: FormGroup = null;
  
  constructor(
    private resetPasswordObservable: ResetPasswordObservable,
    private formBuilder: FormBuilder,
    private resetPasswordUseCase: ResetPasswordUseCase,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const that = this;

    localStorage.removeItem('accessToken');
    
    that.resetPasswordObservable.currentMessage.subscribe( res => {
      if(res != null) {
        that.verifyToken = false;
        console.log(res);
      }
    });

    that.formGroup = that.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validators: MustMatch('newPassword', 'confirmPassword')
    });
    
  }

  getFormValidationErrors() {
    let messageLst = '';
    Object.keys(this.formGroup.controls).forEach(key => {
        const controlErrors: ValidationErrors = this.formGroup.get(key).errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            messageLst += key + ': ' + 'Required<br>';
          });
        }
     });
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

    const accessToken  = this.route.snapshot.queryParams['accessToken'];

    localStorage.setItem('accessToken', accessToken);

    that.resetPasswordUseCase.execute({
      'password' : that.formGroup.get('password').value
    }).subscribe( res => {
      console.log(res);
      Swal.fire({
        title: 'Ok',
        html: res.data.message,
        timerProgressBar: true,
        icon: 'success',
        timer: 5000
      }).then((result) => {
        localStorage.removeItem('accessToken');
        that.submit = false;
        that.router.navigateByUrl('/security/login');
      });
    });
    
  }

  get f() { return this.formGroup.controls; }
}
