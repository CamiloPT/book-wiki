import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/_core/books';
import { BooksService } from 'src/app/_core/books.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() books: Book[];

  constructor(private router: Router, private booksService: BooksService) { }

  openDetails(book: Book) {
    this.router.navigate(['details', book.key])
  }

  addToFavorites(book: Book) {
    this.booksService.saveFavorite(book);
  }
}
