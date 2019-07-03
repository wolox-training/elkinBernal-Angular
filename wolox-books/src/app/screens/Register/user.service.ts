import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1';

  constructor(private http: HttpClient) { }

  createUser(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(`${this.BASE_URL}/users`, data, httpOptions)
  }


}
