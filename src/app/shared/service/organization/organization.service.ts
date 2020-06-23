import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  constructor(private apiService: ApiService) { }

  create(name: string): Promise<any> {
    return this.apiService.post('/organization', { name });
  }

  getAll(): Promise<any> {
    return this.apiService.get('/organization');
  }
}
