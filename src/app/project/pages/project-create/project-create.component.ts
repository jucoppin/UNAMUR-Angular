import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private readonly projectService: ProjectService,
    private readonly fb: FormBuilder,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [null, [Validators.required]],
      description: [null],
      isActive: [false],
      bidon: [{ value: null, disabled: true }],
    });
  }

  submit(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();

      return alert("Erreur de validation");
    }

    console.log(this.formGroup.value);
    console.log(this.formGroup.getRawValue());

    const body = this.formGroup.value;

    this.projectService.create(body).subscribe(x => {
      console.log(x);
      this.router.navigate(['/projects', x.id]);
    });
  }
}
