import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../_core/books.service';
import { Observable } from 'rxjs';
import { Book, BookDetail } from '../_core/books';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.sass']
})
export class BookDetailsComponent {
  book$: Observable<BookDetail>;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
  ) {
    const key = this.route.snapshot.params['key'];
    this.book$ = this.booksService.getBook(key);
    this.book$.subscribe(test => console.log(test))
  }
}
