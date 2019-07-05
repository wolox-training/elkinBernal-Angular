import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  
  book;

  constructor(
    private bookService: BooksService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let { id } = this.route.snapshot.params
    this.bookService.getBook(id).subscribe(res => {
      this.book = res
    })
  }

}
