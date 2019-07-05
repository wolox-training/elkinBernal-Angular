import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getBooks(): Observable<any> {
    return this.http.get(`${environment.base_url}/books`, this.httpOptions)
  }

  getBook(id: number): Observable<any> {
    return this.http.get(`${environment.base_url}/books/${id}`, this.httpOptions)
  }

}
