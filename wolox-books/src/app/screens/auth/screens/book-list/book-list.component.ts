import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books = [];

  constructor(
    private bookService: BooksService,
    private router: Router
  ) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((res: object[]) => {
      this.books = res;
    })
  }

  openDetail(id){
    this.router.navigate(['books', id])
  }
}
