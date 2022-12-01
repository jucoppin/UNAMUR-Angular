import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectList } from '../models/project-list.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private readonly httpClient: HttpClient
  ) {
    console.log('CTOR ' + ProjectService.constructor.name);
  }

  getAll(): Observable<ProjectList[]> {
    console.log('CALLx²');
    return this.httpClient.get<ProjectList[]>('http://localhost:3001/projects');
  }

  create(body: any): Observable<{ id: number }> {
    return this.httpClient.post<{id: number}>('http://localhost:3001/projects', body);
  }
}
