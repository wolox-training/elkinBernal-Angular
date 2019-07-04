import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
