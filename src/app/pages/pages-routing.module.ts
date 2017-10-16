import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { GuardsModule } from '../guards/guards.module';
import { AuthGuard } from '../guards/auth/auth.guard';
import { LoginGuard } from '../guards/login/login.guard';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'login',
        loadChildren: 'app/pages/login/login.module#LoginModule',
        canActivate: [LoginGuard]
      },
      {
        path: 'dashboard',
        loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'not-found',
        loadChildren: 'app/pages/not-found/not-found.module#NotFoundModule'
      },
      {
        path: '**',
        redirectTo: 'not-found'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    GuardsModule
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
