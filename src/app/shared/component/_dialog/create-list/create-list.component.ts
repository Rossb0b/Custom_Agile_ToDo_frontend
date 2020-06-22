import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BoardService } from 'src/app/shared/service/board/board.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.sass'],
})
export class CreateListComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreateListComponent>,
    private boardService: BoardService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  async onSubmit(): Promise<void> {
    try {
      await this.boardService.createList({ ...this.form.value, board: this.data._id });
    } catch (error) {
      throw error;
    }
  }

  closeDialog(): void {
    console.log('ah');
    this.dialogRef.close();
  }
}
