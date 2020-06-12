import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  constructor(private apiService: ApiService) { }

  create(name: string): Promise<void> {
    return this.apiService.post('/organization', { name });
  }
}
