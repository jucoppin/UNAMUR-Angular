import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { ProjectList } from '../../models/project-list.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project!: ProjectList;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly projectService: ProjectService,
  ) {
  }

  ngOnInit(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!, 10);

    if (isNaN(id)) {
      this.router.navigate(['/projects']);
      return;
    }

    this.projectService.getOne(id).subscribe(x => {
      setTimeout(() => this.project = x, 1500);
    });
  }
}
