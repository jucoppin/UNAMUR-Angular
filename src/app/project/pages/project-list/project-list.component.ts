import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ProjectList } from '../../models/project-list.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects!: ProjectList[];
  loading!: boolean;

  constructor(
    private readonly projectService: ProjectService,
  ) {
  }

  ngOnInit(): void {
    this.loading = true;

    this.projectService.getAll().subscribe(x => {
      console.table(x);
      setTimeout(() => {
        this.projects = x;
        this.loading = false;
      }, 2500);
      // this.projects = x;
    });
    // this.projectService.getAll().subscribe({
    //   next: x => null,
    //   error: e => null,
    //   complete: () => null,
    // });
  }
}
