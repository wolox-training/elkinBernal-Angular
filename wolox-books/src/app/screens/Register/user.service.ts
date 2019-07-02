import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1';

  constructor(private http: HttpClient) { }

  createUser(data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post(`${this.BASE_URL}/users`, data, httpOptions).subscribe(e => {
      console.log(e);
    })
  }


}
