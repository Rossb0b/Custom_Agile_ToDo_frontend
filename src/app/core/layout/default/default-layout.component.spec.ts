import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutComponent } from './default-layout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserHeaderComponent } from '../../navigation/user-header/user-header.component';
import { UserAsideComponent } from '../../navigation/user-aside/user-aside.component';
import { UserFooterComponent } from '../../navigation/user-footer/user-footer.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

describe('DefaultLayoutComponent', () => {
  let component: DefaultLayoutComponent;
  let fixture: ComponentFixture<DefaultLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DefaultLayoutComponent,
        UserHeaderComponent,
        UserAsideComponent,
        UserFooterComponent,
      ],
      imports: [
        RouterTestingModule,
        AngularMaterialModule,
        FormsModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
