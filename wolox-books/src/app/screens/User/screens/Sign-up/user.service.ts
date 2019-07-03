import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  createUser(data): Observable<any> {
    return this.http.post(`${this.BASE_URL}/users`, data, this.httpOptions);
  }

  login(data): Observable<any> {
    return this.http.post(`${this.BASE_URL}/users/sessions`, data, this.httpOptions)
  }


}
