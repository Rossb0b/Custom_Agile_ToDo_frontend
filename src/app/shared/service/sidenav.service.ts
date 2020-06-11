import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Sidenav service of the app.
 */
@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  sidenav: MatSidenav;
  opened$ = new BehaviorSubject<boolean>(null);

  setSidenav(sidenav: MatSidenav): void {
    this.sidenav = sidenav;
  }

  toggle(): void {
    this.sidenav.toggle();
    this.opened$.next(this.opened$.getValue() ? false : true);
  }

  setOpened(value: boolean): void {
    this.opened$.next(value);
  }

  opened(): Observable<boolean> {
    return this.opened$.asObservable();
  }
}