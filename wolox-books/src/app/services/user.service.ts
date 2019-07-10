import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  createUser(data): Observable<any> {
    return this.http.post(`${environment.base_url}/users`, data, this.httpOptions);
  }

  login(data): Observable<any> {
    return this.http.post(`${environment.base_url}/users/sessions`, data, this.httpOptions)
  }

  logout(): void {
    this.localStorageService.removeValue('access_token');
    this.router.navigate(['login']);
  }

  isLogged(): boolean {
    return !!this.localStorageService.getValue('access_token');
  }

  getToken(): string {
    return this.localStorageService.getValue('access_token');
  }

}
