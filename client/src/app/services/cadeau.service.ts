import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadeau } from '../models/cadeau.model';
import { HttpClient } from '@angular/common/http';
import { environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadeauService {

  constructor(private http: HttpClient) { }

  findAll() : Observable<Cadeau[]>{
    return this.http.get<Cadeau[]>(`${environment.apiUrl}/cadeaux/`);
  }

  findById(id: string): Observable<Cadeau>{
    return this.http.get<Cadeau>(`${environment.apiUrl}/cadeaux/${id}`);
  }

  create(cadeau: Cadeau): Observable<Cadeau> {
    return this.http.post<Cadeau>(`${environment.apiUrl}/cadeaux/`, cadeau);
  }

  delete(id: string): Observable<Cadeau>{
    return this.http.delete<Cadeau>(`${environment.apiUrl}/cadeaux/${id}`);
  }

  update(id: string, cadeau: Cadeau): Observable<Cadeau>{
    return this.http.put<Cadeau>(`${environment.apiUrl}/cadeaux/${id}`, cadeau);
  }
}
