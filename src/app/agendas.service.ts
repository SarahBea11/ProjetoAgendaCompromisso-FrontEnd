import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agendas } from './agendas';


@Injectable({
  providedIn: 'root',
})
export class AgendasService {

  url='http://localhost:8080/agenda';

  constructor(private http: HttpClient) {}

  getAgendas(): Observable<Agendas[]> {
    return this.http.get<Agendas[]>(this.url);
  }

  delete(agenda: Agendas): Observable<void> {
    return this.http.delete<void>(`${this.url}/${agenda.id}`);

  }getAgendasById(id:number): Observable<Agendas>{
    return this.http.get<Agendas>(`${this.url}/${id}`);
    }

  save(agenda: Agendas): Observable<Agendas> {
    return this.http.post<Agendas>(this.url, agenda);
  }

  update(agenda: Agendas): Observable<Agendas> {
    return this.http.put<Agendas>(`${this.url}/${agenda.id}`, agenda);
  }
}
