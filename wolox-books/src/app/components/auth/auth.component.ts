import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  title = 'BOOKS';

  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.localStorageService.removeValue('access_token');
    this.router.navigate(['login']);
  }

}
