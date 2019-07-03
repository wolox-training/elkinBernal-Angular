import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../user.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private userService: UserService, private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      session: new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
      })
    })
  }

  onSubmit() {
    this.userService.login(this.form.value).subscribe(({ access_token }) => {
      this.localStorageService.setValue('access_token', access_token)
      this.router.navigate(['auth']);
    })
  }

}
