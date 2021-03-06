import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorHeaderComponent } from './visitor-header.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { TranslateModule } from '@ngx-translate/core';

describe('VisitorHeaderComponent', () => {
  let component: VisitorHeaderComponent;
  let fixture: ComponentFixture<VisitorHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorHeaderComponent],
      imports: [
        AngularMaterialModule,
        TranslateModule.forRoot(),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
