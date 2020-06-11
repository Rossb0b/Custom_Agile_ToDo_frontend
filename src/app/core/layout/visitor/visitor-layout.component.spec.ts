import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorLayoutComponent } from './visitor-layout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { VisitorHeaderComponent } from '../../navigation/visitor-header/visitor-header.component';
import { VisitorFooterComponent } from '../../navigation/visitor-footer/visitor-footer.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

describe('VisitorLayoutComponent', () => {
  let component: VisitorLayoutComponent;
  let fixture: ComponentFixture<VisitorLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VisitorLayoutComponent,
        VisitorHeaderComponent,
        VisitorHeaderComponent,
        VisitorFooterComponent,
      ],
      imports: [
        RouterTestingModule,
        AngularMaterialModule,
        FormsModule,
        TranslateModule.forRoot(),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
