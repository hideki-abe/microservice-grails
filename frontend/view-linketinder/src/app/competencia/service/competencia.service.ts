import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {

  constructor(private httpClient: HttpClient) { }

  listCompetencias(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/zghero/competencias");
  }

}
