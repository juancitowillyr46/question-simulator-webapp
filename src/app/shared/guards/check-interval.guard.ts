import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { LoginComponent } from '../../presentation/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class CheckIntervalGuard implements CanActivate {

  // loggedIn = false;

  constructor(
    private router: Router,
    // public modalService: NgbModal
  ) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const that = this;
    // that.loggedIn = true;
    if(typeof localStorage.getItem("seconds") !== 'undefined' && localStorage.getItem("seconds") != null){
      return true;
    }

    // let ref = null;
    // ref = this.modalService.open(LoginComponent, 
    //   {
    //     ariaLabelledBy: 'modal-basic-title', 
    //     backdrop: 'static', 
    //     size: 'sm',
    //     centered: true
    //   }
    // );

    // ref.componentInstance.dataModal = {
    //   isExpiredToken: true
    // };

    this.router.navigate(['exams/available']);

  }
  
}
