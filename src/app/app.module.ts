import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { QuestionsComponent } from './maintainers/questions/questions.component';
import { QuestionsPostComponent } from './maintainers/questions/questions-post/questions-post.component';
import { QuestionsListComponent } from './maintainers/questions/questions-list/questions-list.component';
import { QuestionsIndexComponent } from './maintainers/questions/questions-index/questions-index.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuestionsService } from './maintainers/questions/questions.service';

// import { HeaderComponent } from './shared/header/header.component';
// import { FooterComponent } from './shared/footer/footer.component';
import { SharedObservable } from './observables/shared.observable';
// import { SimulacrumModule } from './simulacrum/simulacrum.module';
// import { UsersModule } from './maintainers/users/users.module';
// import { GeneratePassword } from './commons/generatePassword';
// import { LoginService } from './login/login.service';
// import { LogoutUser } from './commons/logoutUser';
// import { ExamObservable } from './simulacrum/exam/exam.observable';
// import { SuccessMessageObservable } from './simulacrum/success-message/sucess-message.observable';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthService } from './auth.service';
import { NotFoundComponent } from './shared/not-found/not-found.component';
// import { LoginObservable } from './login/login.observable';
import { UsersGuard } from './maintainers/users/users.guard';
import { AuthObservable } from './auth.observable';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './shared/menu/menu.component';
// import { QuestionsModule } from './maintainers/questions/questions.module';
import { CategoriesComponent } from './maintainers/categories/categories.component';
import { CategoriesModule } from './maintainers/categories/categories.module';
// import { SignupComponent } from './signup/signup.component';
// import { SignUpObservable } from './signup/signup.observable';
import { MessageObservable } from './observables/message.observable';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { NavComponent } from './shared/nav/nav.component';
import { NgbPaginationModule, NgbAlertModule, NgbProgressbarModule, NgbAccordionModule, NgbModalModule, NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ExamProgressBarObservable } from './core/observables/exam-progress-bar.observable';

import { CommonModule } from '@angular/common';
import { QuestionsTypesComponent } from './maintainers/questions-types/questions-types.component';
import { QuestionsTypesService } from './maintainers/questions-types/questions-types.service';
import { ExamClearTimerObservable } from './core/observables/exam-clear-timer.observable';
import { UsersListComponent } from './maintainers/users/users-list/users-list.component';
import { UsersIndexComponent } from './maintainers/users/users-index/users-index.component';
import { UsersPostComponent } from './maintainers/users/users-post/users-post.component';
import { CategoryObservable } from './core/observables/category.observable';
import { IsEndExamObservable } from './core/observables/is-end-exam.observable';
import { SharedModule } from './shared/shared.module';
import { ExamsModule } from './modules/exams/exams.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { CheckIntervalGuard } from './shared/guards/check-interval.guard';
import { ForgotPasswordComponent } from './presentation/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './presentation/reset-password/reset-password.component';
import { MyProfileComponent } from './presentation/my-profile/my-profile.component';
// import { AuthHttpErrorsInterceptor } from './shared/interceptors/auth-http-errors.interceptor';
// import { AuthHttpHeaderInterceptor } from './shared/interceptors/auth-http-header.interceptor';

@NgModule({
  declarations: [
    AppComponent,

    /* Shared */
    // SidebarComponent,
    // HeaderComponent,
    NavComponent,
    // FooterComponent,
    
    NotFoundComponent,

    MenuComponent,
    CategoriesComponent,
    // SignupComponent,

    /* Exams */
    // ExamsEnabledComponent,
    // ExamsScoreComponent,
    // ExamsQuestionsComponent,

    /* Questions */
    QuestionsIndexComponent,
    QuestionsListComponent,
    QuestionsPostComponent,
    QuestionsTypesComponent,

    /* Users */
    UsersIndexComponent,
    UsersListComponent,
    UsersPostComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    MyProfileComponent
    // HomeComponent,
    // LoginComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FontAwesomeModule,

    CoreModule,
    SharedModule,
    

    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,

    HttpClientModule,
    // FontAwesomeModule,
    NgbPaginationModule, 
    NgbAlertModule,
    NgbProgressbarModule,
    NgbAccordionModule,
    NgCircleProgressModule.forRoot(),
    NgbModalModule,
    NgbCollapseModule,
    NgbTooltipModule,
    
    CategoriesModule,

    // ExamsModule,
    // QuestionsModule,
    // SimulacrumModule,
    // UsersModule,

  ],
  providers: [
    QuestionsService,
    QuestionsTypesService,
    SharedObservable,
    // GeneratePassword,
    // LoginService,
    // LogoutUser,
    // ExamObservable,
    // SuccessMessageObservable,
    // LoginObservable,
    AuthObservable,
    // SignUpObservable,
    MessageObservable,
    ExamProgressBarObservable,
    ExamClearTimerObservable,
    CategoryObservable,
    IsEndExamObservable,
    AuthService,
    AuthGuard,
    // CheckIntervalGuard,
    UsersGuard,    
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: []
})
export class AppModule {

  constructor() { 
    
  }

}
