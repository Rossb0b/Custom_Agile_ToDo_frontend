import { TestBed } from '@angular/core/testing';

import { SidenavService } from './sidenav.service';

describe('SidenavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SidenavService = TestBed.get(SidenavService);
    expect(service).toBeTruthy();
  });

  it('should toggle', () => {
    const service: SidenavService = TestBed.get(SidenavService);
    // tslint:disable-next-line: no-empty
    service.sidenav = { toggle: () => {} } as any;
    service.setOpened(true);
    spyOn(service.sidenav, 'toggle').and.callFake(() => Promise.resolve(true as any));
    spyOn(service.opened$, 'next');
    service.toggle();
    expect(service.sidenav.toggle).toHaveBeenCalled();
    expect(service.opened$.next).toHaveBeenCalledWith(false);
  });
});
