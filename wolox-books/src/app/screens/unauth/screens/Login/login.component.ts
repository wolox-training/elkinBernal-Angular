import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.form = new FormGroup({
      session: new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
      })
    })
  }

  onSubmit() {
    this.userService.login(this.form.value).subscribe(res => {
      console.log(res);
    })
  }

}
