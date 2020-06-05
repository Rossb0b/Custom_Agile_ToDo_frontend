import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/guard/auth.guard';

import { DefaultLayoutComponent } from './layout/default/default-layout.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    data: { state: 'home' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
