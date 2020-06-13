import { TestBed } from '@angular/core/testing';

import { OrganizationService } from './organization.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from '../api/api.service';

describe('OrganizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service = TestBed.get(OrganizationService);
    expect(service).toBeTruthy();
  });

  it('should create', async () => {
    const service = TestBed.get(OrganizationService);
    const apiService = TestBed.get(ApiService);
    spyOn(apiService, 'post').and.callFake(() => Promise.resolve({ organizationId: 1 }));
    const q = await service.create('test');
    expect(q).toEqual({ organizationId: 1 });
  });
});
