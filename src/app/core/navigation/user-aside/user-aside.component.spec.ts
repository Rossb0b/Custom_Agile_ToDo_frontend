import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAsideComponent } from './user-aside.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserAsideComponent', () => {
  let component: UserAsideComponent;
  let fixture: ComponentFixture<UserAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserAsideComponent],
      imports: [
        FormsModule,
        AngularMaterialModule,
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
