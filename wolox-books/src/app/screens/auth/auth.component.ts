import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

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
