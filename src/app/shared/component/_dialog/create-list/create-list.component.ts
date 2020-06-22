import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

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
    console.log('TODO SUBMIT');
  }

  closeDialog(): void {
    console.log('ah');
    this.dialogRef.close();
  }
}
