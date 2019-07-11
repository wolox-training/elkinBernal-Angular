import { Component } from '@angular/core';
import { UserService } from 'src/app/screens/unauth/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  title = 'BOOKS';

  constructor(
    private UserService: UserService
  ) { }

  logout() {
    this.UserService.logout();
  }

}
