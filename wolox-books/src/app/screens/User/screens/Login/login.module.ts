import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule { }
