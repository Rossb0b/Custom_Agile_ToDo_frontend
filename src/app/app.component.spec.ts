import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './shared/service/user/user.service';
import { HttpClient } from '@angular/common/http';
import { createHttpLoader } from './shared/angular-material.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        HttpClientTestingModule,
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should init', () => {
    const translateService = TestBed.get(TranslateService);
    spyOn(translateService, 'addLangs');
    spyOn(translateService, 'use');
    spyOn(localStorage, 'getItem').and.callFake(() => 'fr');
    spyOn(component, 'connectUser').and.callFake(() => Promise.resolve());
    component.ngOnInit();
    expect(translateService.addLangs).toHaveBeenCalledWith(['en', 'fr']);
    expect(translateService.use).toHaveBeenCalledWith('fr');
    expect(component.connectUser).toHaveBeenCalled();
  });

  it('should connect user', async () => {
    const userService = TestBed.get(UserService);
    spyOn(userService, 'connectUser').and.callFake(() => Promise.resolve());
    await component.connectUser();
    expect(userService.connectUser).toHaveBeenCalled();
  });

  it('should createHttpLoader [[angular-material.module.ts]]', () => {
    const http = TestBed.get(HttpClient);
    expect(createHttpLoader(http)).toBeTruthy();
  });
});
