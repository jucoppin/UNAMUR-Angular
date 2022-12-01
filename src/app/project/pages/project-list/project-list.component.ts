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

        // this.projects.sort((a, b) => {
        //   return a.id < b.id ? -1 : 1;
        // });

        // Vous avez le full access
        // this.projects.splice(0, 20);

        this.loading = false;
      }, 0);
      // this.projects = x;
    });
    // this.projectService.getAll().subscribe({
    //   next: x => null,
    //   error: e => null,
    //   complete: () => null,
    // });
  }

  sort(column: keyof ProjectList) {
    this.projects.sort((a, b) => {
      return a[column] < b[column] ? -1 : 1;
    });
  }
}
