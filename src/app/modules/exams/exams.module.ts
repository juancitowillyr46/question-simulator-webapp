import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsComponent } from './exams.component';
import { ExamsRoutingModule } from  './exams-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ExamsEnabledComponent } from '../../presentation/exams-enabled/exams-enabled.component';
import { ExamsScoreComponent } from '../../presentation/exams-score/exams-score.component';
import { ExamsQuestionsComponent } from 'src/app/presentation/exams-questions/exams-questions.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbAlertModule, NgbModalModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';

@NgModule({
  declarations: [ExamsComponent, ExamsEnabledComponent, ExamsScoreComponent, ExamsQuestionsComponent],
  imports: [
    // BrowserModule,
    // AppRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
    // NgbAlertModule,
    // NgbProgressbarModule,
    NgbModalModule,
    FontAwesomeModule,
    CommonModule,
    ExamsRoutingModule,
    SharedModule
  ],
  exports: [ExamsComponent, ExamsEnabledComponent, ExamsScoreComponent, ExamsQuestionsComponent],
})
export class ExamsModule { }
