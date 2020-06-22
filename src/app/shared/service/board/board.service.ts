import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private apiService: ApiService) { }

  getAll(): Promise<any> {
    return this.apiService.get('/board');
  }
}
