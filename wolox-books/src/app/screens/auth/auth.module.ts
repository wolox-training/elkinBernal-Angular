import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { BookListModule } from './screens/book-list/book-list.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    BookListModule,
    AuthRoutingModule,
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
