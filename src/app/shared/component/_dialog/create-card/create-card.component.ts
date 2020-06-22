import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BoardService } from 'src/app/shared/service/board/board.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.sass'],
})
export class CreateCardComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreateCardComponent>,
    private boardService: BoardService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.buildForm();
  }

  ngOnInit() {
    console.log(this.data);
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  async onSubmit(): Promise<void> {
    try {
      await this.boardService.createCard({ ...this.form.value, list: this.data._id });
    } catch (error) {
      throw error;
    }
  }
}
