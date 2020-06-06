import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from 'src/app/shared/guard/auth.guard';

import { BoardCreateComponent } from 'src/app/feature/board/create/board-create.component';
import { BoardEditComponent } from 'src/app/feature/board/edit/board-edit.component';
import { BoardShowComponent } from 'src/app/feature/board/show/board-show.component';
import { LoggedLayoutComponent } from 'src/app/layout/logged/logged-layout.component';
import { OrganisationCreateComponent } from 'src/app/feature/organisation/create/organisation-create.component';
import { OrganisationEditComponent } from 'src/app/feature/organisation/edit/organisation-edit.component';
import { OrganisationViewComponent } from 'src/app/feature/organisation/view/organisation-view.component';

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
    path: 'create-organisation',
    component: OrganisationCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-organisation/:organisationName',
    component: OrganisationEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'view-organisation/:organisationName',
    component: OrganisationViewComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class LoggedRoutingModule {}
