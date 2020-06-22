import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api/api.service';
import { HttpClient } from '@angular/common/http';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { CreateListComponent } from 'src/app/shared/component/_dialog/create-list/create-list.component';
import { CreateCardComponent } from 'src/app/shared/component/_dialog/create-card/create-card.component';
import { BoardService } from 'src/app/shared/service/board/board.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass'],
})
export class BoardComponent implements OnInit {
  fakeAvatars = [];
  boardId = this.route.snapshot.params.id;
  board;

  constructor(
    private http: HttpClient,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private dialog: MatDialog,
    private boardService: BoardService,
    private route: ActivatedRoute,
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

    try {
      this.board = await this.boardService.find(this.boardId);
    } catch (error) {
      throw error;
    }
  }

  addList(): void {
    this.dialog.open(CreateListComponent);
  }

  addCard(list): void {
    this.dialog.open(CreateCardComponent, { data: list });
  }
}
