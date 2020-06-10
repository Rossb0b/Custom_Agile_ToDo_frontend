import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { take } from 'rxjs/operators';
import { ApiService } from '../api/api.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    });

    service = TestBed.get(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get current user', () => {
    service.getCurrentUser().pipe(take(1)).subscribe((user) => {
      expect(user).toBeNull();
    });
  });

  it('should get current user value', () => {
    expect(service.getCurrentUserValue()).toBeNull();
  });

  it('should create', () => {
    const apiService = TestBed.get(ApiService);
    spyOn(apiService, 'post').and.callFake(() => Promise.resolve({}));
    service.create({} as any).then((res: any) => expect(res).toEqual({}));
  });
});
