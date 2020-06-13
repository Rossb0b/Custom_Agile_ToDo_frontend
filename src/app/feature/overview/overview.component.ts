import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateOrganizationDialogComponent } from 'src/app/shared/component/_dialog/create-organization-dialog/create-organization-dialog.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.sass'],
})
export class OverviewComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  addOrganization(): void {
    this.dialog.open(CreateOrganizationDialogComponent, {
      panelClass: 'todos',
    });
  }
}
