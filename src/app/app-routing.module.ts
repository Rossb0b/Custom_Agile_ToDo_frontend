import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/guard/auth.guard';

import { DefaultLayoutComponent } from './layout/default/default-layout.component';
import { LoginComponent } from './feature/auth/login/login.component';
import { SignupComponent } from './feature/auth/signup/signup.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    data: { state: 'home' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { state: 'login' },
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { state: 'signup' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
