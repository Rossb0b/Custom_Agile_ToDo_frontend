import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorLayoutComponent } from './visitor-layout.component';
import { RegisterComponent } from '../../page/register/register.component';
import { LoginComponent } from '../../page/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: VisitorLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorLayoutRoutingModule { }
