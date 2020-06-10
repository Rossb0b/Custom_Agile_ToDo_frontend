import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUserSubject = new BehaviorSubject<User>(null);

  constructor(private apiService: ApiService) { }

  getCurrentUser(): Observable<User> {
    return this.currentUserSubject.asObservable();
  }

  getCurrentUserValue(): User {
    return this.currentUserSubject.getValue();
  }

  setUser(user: User): void {
    this.currentUserSubject.next(user);
  }

  create(user: User): Promise<any> {
    return this.apiService.post('/user', user);
  }
}
