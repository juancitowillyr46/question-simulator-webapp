import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHttpGatewayService } from './base/auth-http-gateway.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpHeaderInterceptor } from '../shared/interceptors/auth-http-header.interceptor';
import { AuthHttpErrorsInterceptor } from '../shared/interceptors/auth-http-errors.interceptor';
import { GetPlanObservable } from '../shared/observables/get-plan.observables';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthHttpGatewayService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpHeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpErrorsInterceptor,
      multi: true
    },
    GetPlanObservable
  ]
})
export class CoreModule { }
