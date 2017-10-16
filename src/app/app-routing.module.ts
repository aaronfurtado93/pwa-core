import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'page',
    loadChildren: 'app/pages/pages.module#PagesModule',
  },
  {
    path: '**',
    redirectTo: 'page/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
