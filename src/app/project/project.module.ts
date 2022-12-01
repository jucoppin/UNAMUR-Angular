import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectCreateComponent } from './pages/project-create/project-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';



@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectCreateComponent,
    ProjectDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    ReactiveFormsModule
  ]
})
export class ProjectModule { }
