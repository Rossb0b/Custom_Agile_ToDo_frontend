import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateOrganizationDialogComponent } from 'src/app/shared/component/_dialog/create-organization-dialog/create-organization-dialog.component';
import { OrganizationService } from 'src/app/shared/service/organization/organization.service';
import { BoardService } from 'src/app/shared/service/board/board.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.sass'],
})
export class OverviewComponent implements OnInit {
  boards;

  constructor(
    public dialog: MatDialog,
    private organizationService: OrganizationService,
    private boardService: BoardService,
  ) {}

  ngOnInit() {
    this.initialize();
  }

  addOrganization(): void {
    this.dialog.open(CreateOrganizationDialogComponent, {
      panelClass: 'todos',
    });
  }

  async initialize(): Promise<void> {
    try {
      await this.organizationService.getAll();
      this.boards = await this.boardService.getAll();
    } catch (error) {
      throw error;
    }
  }
}
