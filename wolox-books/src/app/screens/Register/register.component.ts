import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  title = 'BOOKS';
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormGroup({
        firstname: new FormControl(''),
        lastname: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
      })
    })
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
