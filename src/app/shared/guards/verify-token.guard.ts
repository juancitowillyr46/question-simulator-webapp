import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { VerifyTokenUseCase } from 'src/app/domain/security/usecase/verify-token.usecase';
import { LoginComponent } from '../../presentation/login/login.component';
import Swal from 'sweetalert2';
import { ResetPasswordObservable } from '../observables/reset-password.observable';

@Injectable({
  providedIn: 'root'
})
export class VerifyTokenGuard implements CanActivate {

  // loggedIn = false;

  constructor(
    private router: Router,
    private verifyTokenUseCase: VerifyTokenUseCase,
    private resetPasswordObservable: ResetPasswordObservable
    // public modalService: NgbModal
  ) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {

    const that = this;
    
    const accessToken  = next.parent.queryParams['accessToken'];

    localStorage.setItem('accessToken', accessToken);

    that.verifyTokenUseCase.execute({}).subscribe( res => {
      console.log(res);
      that.resetPasswordObservable.changeMessage(true);
      return true;
    }, (error) => {

      Swal.fire({
          title: 'Error!',
          text: error['error']['error']['message'],
          timerProgressBar: true,
          icon: 'error',
          confirmButtonText: 'Ok',
          timer: 5000
      }).then((result) => {
        this.router.navigate(['/security/login']);
      });

    });
    return true;
  }
  
    // async promiseGetProfile() {
    //     const that = this;
    //     return new Promise((resolve, reject) => {
    //         that.verifyTokenUseCase.execute({}).subscribe((response: any) => {
    //         resolve(response);
    //         }, reject);
    //     });
    // }

}
