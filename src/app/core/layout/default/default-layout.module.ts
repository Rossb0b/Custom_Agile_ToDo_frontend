import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutRoutingModule } from './default-layout-routing.module';
import { DefaultLayoutComponent } from './default-layout.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { UserHeaderComponent } from '../../navigation/user-header/user-header.component';
import { UserFooterComponent } from '../../navigation/user-footer/user-footer.component';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    UserHeaderComponent,
    UserFooterComponent,
  ],
  imports: [
    CommonModule,
    DefaultLayoutRoutingModule,
    AngularMaterialModule,
  ],
})
export class DefaultLayoutModule { }
