import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamsComponent } from './exams.component';
import { ExamsEnabledComponent } from './../../presentation/exams-enabled/exams-enabled.component';
import { ExamsQuestionsComponent } from './../../presentation/exams-questions/exams-questions.component';
import { ExamsScoreComponent } from './../../presentation/exams-score/exams-score.component';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { CheckIntervalGuard } from '../../shared/guards/check-interval.guard';

const routes: Routes = [
  {
    path: '',
    component: ExamsComponent,
    children: [
      {
        path: '',
        redirectTo: 'available',
        pathMatch: 'full',
        data: {title: 'Simulador', progressExam: false},
        canActivate: [AuthGuard]
      },
      {
        path: 'available',
        component: ExamsEnabledComponent,
        data: {title: 'Simulacros disponibles', progressExam: false},
        canActivate: [AuthGuard]
      },
      {
        path: 'quizzed/:keyExam/questions/:idQuestion',
        component: ExamsQuestionsComponent,
        data: {title: 'Simulador', progressExam: true},
        canActivate: [AuthGuard, CheckIntervalGuard]
      },
      {
        path: 'score/:keyExam/ngb-panel-0-header',
        component: ExamsScoreComponent,
        data: {title: 'Resultado', progressExam: true},
        canActivate: [AuthGuard]
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamsRoutingModule { }
