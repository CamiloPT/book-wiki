import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../_core/books';
import { BooksService } from '../_core/books.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  suggestions$: Observable<Book[]>;
  search: string;

  constructor(
    private router: Router,
    private booksService: BooksService
  ) {
    this.suggestions$ = this.booksService.getSuggestions();
  }

  searchBooks($event: Event): void {
    if (($event as KeyboardEvent).key === 'Enter') {
      this.router.navigate(['list', this.search]);
    }
  }

  openBook(suggestion: Book): void {
    this.router.navigate(['details', suggestion.key]);
  }

  addToFavorites(book: Book) {
    this.booksService.saveFavorite(book);
  }
}
