import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { SidenavService } from 'src/app/shared/service/sidenav.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-default',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.sass'],
})
export class DefaultLayoutComponent implements OnInit, AfterViewInit {
  isDesktop = false;
  @ViewChild('sideNav', { static: false }) sidenav: MatSidenav;

  constructor(
    private deviceService: DeviceDetectorService,
    private sidenavService: SidenavService,
  ) {}

  ngOnInit() {
    this.isDesktop = !(this.deviceService.isMobile() || this.deviceService.isTablet());
    this.sidenavService.setOpened(!this.isDesktop);
  }

  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }
}
