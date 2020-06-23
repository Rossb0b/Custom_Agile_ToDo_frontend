import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout.component';
import { OverviewComponent } from 'src/app/feature/overview/overview.component';
import { BoardComponent } from 'src/app/feature/board/board.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'board/:id',
        component: BoardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultLayoutRoutingModule { }
