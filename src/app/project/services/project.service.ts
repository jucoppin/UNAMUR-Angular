import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
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
    //  138.48.248.123
    return this.httpClient.get<ProjectList[]>('http://localhost:3001/projects').pipe(
      map(x => {
        x.sort((a, b) => {
          return a.isActive ? -1 : 1;
        });
        // debugger

        return x;
      })
    );
  }

  getOne(id: number): Observable<ProjectList> {
    return this.httpClient.get<ProjectList>(`http://localhost:3001/projects/${id}`);
  }

  create(body: any): Observable<{ id: number }> {
    return this.httpClient.post<{id: number}>('http://localhost:3001/projects', body);
  }
}
