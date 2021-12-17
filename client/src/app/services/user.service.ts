import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  findAll() : Observable<User[]>{
    return this.http.get<User[]>(`${environment.apiUrl}/users/`);
  }

  findById(id: string): Observable<User>{
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  save(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users/`, user);
  }

  delete(id: string): Observable<User>{
    return this.http.delete<User>(`${environment.apiUrl}/users/${id}`);
  }

  update(id: string, user: User): Observable<User>{
    return this.http.put<User>(`${environment.apiUrl}/users/${id}`, user);
  }
}
