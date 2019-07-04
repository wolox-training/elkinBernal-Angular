import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list.component';
import { BookCardComponent } from '../components/book-card/book-card.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookListComponent
  ]
})
export class BookListModule { }
