import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/';
import { AuthGuard } from './authentication/shared';
import { CoursesRoutes } from './courses/courses-routing.module';

import { HomeComponent } from './layout';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: '/categories',
        pathMatch: 'full'
      },
      ...CoursesRoutes
    ],
    canActivate: [AuthGuard]    
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
