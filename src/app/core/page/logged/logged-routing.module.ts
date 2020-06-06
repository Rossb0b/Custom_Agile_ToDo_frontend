import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from 'src/app/shared/guard/auth.guard';

import { BoardCreateComponent } from 'src/app/feature/board/create/board-create.component';
import { BoardEditComponent } from 'src/app/feature/board/edit/board-edit.component';
import { BoardShowComponent } from 'src/app/feature/board/show/board-show.component';
import { LoggedLayoutComponent } from 'src/app/layout/logged/logged-layout.component';
import { OrganizationCreateComponent } from 'src/app/feature/organization/create/organization-create.component';
import { OrganizationEditComponent } from 'src/app/feature/organization/edit/organization-edit.component';
import { OrganizationViewComponent } from 'src/app/feature/organization/view/organization-view.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedLayoutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-board',
    component: BoardCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-board/:boardName',
    component: BoardEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'view-board/:boardName',
    component: BoardShowComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-organization',
    component: OrganizationCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-organization/:organizationName',
    component: OrganizationEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'view-organization/:organizationName',
    component: OrganizationViewComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class LoggedRoutingModule {}
