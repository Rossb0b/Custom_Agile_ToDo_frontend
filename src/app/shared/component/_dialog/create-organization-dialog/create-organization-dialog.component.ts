import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrganizationService } from 'src/app/shared/service/organization/organization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-organization-dialog',
  templateUrl: './create-organization-dialog.component.html',
  styleUrls: ['./create-organization-dialog.component.sass'],
})
export class CreateOrganizationDialogComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private organizationService: OrganizationService,
    private router: Router,
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

  async createOrganization(): Promise<void> {
    if (!this.form.valid) return;

    this.loading = true;

    try {
      const req = await this.organizationService.create(this.form.value.name);
      this.router.navigateByUrl(`/organization/${req.organizationId}`);
    } catch (error) {
      throw Error(error);
    } finally {
      this.loading = false;
    }
  }
}
