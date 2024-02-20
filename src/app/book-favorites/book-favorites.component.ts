import { Component } from '@angular/core';
import { BooksService } from '../_core/books.service';
import { Book } from '../_core/books';

@Component({
  selector: 'app-book-favorites',
  templateUrl: './book-favorites.component.html',
  styleUrls: ['./book-favorites.component.sass']
})
export class BookFavoritesComponent {
  favorites: Book[];
  constructor(private booksService: BooksService) {
    this.favorites = this.booksService.getFavorites();
  }
}
