import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProfileComponent } from 'src/app/presentation/my-profile/my-profile.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { ForgotPasswordComponent } from '../../presentation/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../../presentation/reset-password/reset-password.component';
import { VerifyTokenGuard } from '../../shared/guards/verify-token.guard';
import { LoginComponent } from './../../presentation/login/login.component';
import { SecurityComponent } from './security.component';

const routes: Routes = [
  {
    path: '',
    component: SecurityComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        canActivate: [VerifyTokenGuard]
      },
      {
        path: 'my-profile',
        component: MyProfileComponent,
        canActivate: [] //AuthGuard
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
