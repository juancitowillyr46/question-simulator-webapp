import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

const routes: Routes = [
  {
    path: 'security',
    loadChildren: () => import('./modules/security/security.module')
    .then(m => m.SecurityModule)
  },
  {
    path: 'exams',
    loadChildren: () => import('./modules/exams/exams.module')
    .then(m => m.ExamsModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'security/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
