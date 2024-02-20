import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../_core/books';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../_core/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.sass']
})
export class BooksListComponent {
  books$: Observable<Book[]>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private booksService: BooksService,
  ) {
    const search = this.route.snapshot.params['search'];
    this.books$ = this.booksService.getBooks(search);
  }

  openDetails(book: Book) {
    this.router.navigate(['details', book.key])
  }
}
