import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './../../presentation/login/login.component';
import { SecurityRoutingModule } from './security-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SecurityComponent, LoginComponent],
  imports: [
    // BrowserModule,
    // AppRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    SecurityRoutingModule
  ],
  exports: [SecurityComponent, LoginComponent],
})
export class SecurityModule { }
