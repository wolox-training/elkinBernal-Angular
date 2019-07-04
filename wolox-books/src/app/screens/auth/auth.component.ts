import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/screens/unauth/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  title = 'BOOKS';

  constructor(
    private UserService: UserService,
    private router: Router
  ) { }

  logout() {
    this.UserService.logout()
    this.router.navigate(['login']);
  }

}
