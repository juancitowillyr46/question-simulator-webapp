import { Component, OnInit, OnDestroy } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faList, faUsers, faSignOutAlt, faUser, faHome, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../auth.service';
// import { UserAuth } from '../../core/models/userAuth.model';
import { AuthObservable } from '../../../auth.observable';
import { Router } from '@angular/router';
import { ProfileUseCase } from 'src/app/domain/security/usecase/profile.usecase';
import { GetPlanObservable } from '../../observables/get-plan.observables';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public data = null;
  public subscription: Subscription = null;
  public isLoggin: boolean;
  public userAuthAttr: any = null;

  constructor(
    private profileUseCase: ProfileUseCase,
    private authObservable: AuthObservable,
    private routers: Router,
    private getPlanObservable: GetPlanObservable
  ) {
    library.add(faList, faUsers, faSignOutAlt, faUser, faHome, faUsers, faEdit);
  }

  ngOnInit() {
    const that = this;
    that.profileUseCase.execute().subscribe( res => {
      //console.log(res.data);
      that.data = res;
      that.getPlanObservable.changeMessage(that.data);
    });
  }

  logout() {
    const that = this;
    var confirmLogout = confirm('¿Estás seguro que quieres salir?');
    if(confirmLogout) {
      that.routers.navigateByUrl('/security/login');
      localStorage.removeItem('accessToken');
    }
    
  }

  navMenu(url: any) {
    this.routers.navigate([url]);
  }

}
