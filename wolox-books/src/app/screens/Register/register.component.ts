import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from './user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  title = 'BOOKS';
  form: FormGroup;

  constructor(private userService: UserService) {

  }

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
      console.log(e);
    })
  }
}
