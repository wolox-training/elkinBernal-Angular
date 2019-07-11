import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { BookListModule } from './screens/book-list/book-list.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    BookListModule,
    AppRoutingModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
