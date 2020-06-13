import { Component, OnInit, OnDestroy } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { SidenavService } from 'src/app/shared/service/sidenav/sidenav.service';
import { UserService } from 'src/app/shared/service/user/user.service';
import { User } from 'src/app/shared/interface/user.interface';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.sass'],
})
export class UserHeaderComponent implements OnInit, OnDestroy {
  sidenavOpened = false;
  user: User;
  scavenger = new Scavenger(this);

  constructor(
    private sidenavService: SidenavService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.sidenavService.opened().pipe(
      this.scavenger.collect(),
    ).subscribe((value) => {
      this.sidenavOpened = value;
    });

    this.userService.getCurrentUser().pipe(
      this.scavenger.collect(),
    ).subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy() {}

  toggleSidenav(): void {
    this.sidenavService.toggle();
  }
}
