import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api/api.service';
import { HttpClient } from '@angular/common/http';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { CreateListComponent } from 'src/app/shared/component/_dialog/create-list/create-list.component';
import { CreateCardComponent } from 'src/app/shared/component/_dialog/create-card/create-card.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass'],
})
export class BoardComponent implements OnInit {
  fakeAvatars = [];
  constructor(
    private http: HttpClient,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private dialog: MatDialog,
  ) {
    this.matIconRegistry.addSvgIcon(
      `user_add`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/user-plus-solid.svg`),
    );
  }

  async ngOnInit() {
    // tslint:disable-next-line: no-magic-numbers
    for (let i = 0; i < 5; i++) {
      try {
        const req = await this.http.get('https://randomuser.me/api/').toPromise() as any;
        this.fakeAvatars.push(req.results[0].picture.thumbnail);
      } catch (error) {
        throw error;
      }
    }
  }

  addList(): void {
    this.dialog.open(CreateListComponent);
  }

  addCard(): void {
    this.dialog.open(CreateCardComponent);
  }
}
