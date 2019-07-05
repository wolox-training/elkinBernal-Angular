import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from './user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  title = 'BOOKS';
  form: FormGroup;

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormGroup({
        first_name: new FormControl(''),
        last_name: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
        password_confirmation: new FormControl(''),
        locale: new FormControl('en')
      })
    })
  }

  onSubmit() {
    this.userService.createUser(this.form.value).subscribe(e => {
      this.route.navigate(['/login']);
    })
  }
}
