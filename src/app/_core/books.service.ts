import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from "rxjs";
import { Author, Book, BookDetail, BooksApiResponse } from "./books";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private endpoint = 'https://openlibrary.org';

  constructor(private http: HttpClient) { }

  getBooks(search: string): Observable<Book[]> {
    return this.http.get<BooksApiResponse>(`${this.endpoint}/search.json?q=${search}&fields=key,title,author_name,publish_year,cover_i&limit=20`).pipe(map(response => response.docs));
  }

  getBook(key: string): Observable<BookDetail> {
    return this.http.get<BookDetail>(`${this.endpoint}${key}.json`).pipe(switchMap(book =>
      this.http.get<Author>(`${this.endpoint}${book.authors[0].author.key}.json`).pipe(map(author => ({
        ...book,
        authors: [author]
      })))
    ));
  }

  getSuggestions(): Observable<Book[]> {
    const randomSearchQueries = ['science fiction', 'fantasy', 'mystery', 'biography'];
    const randomQuery = randomSearchQueries[Math.floor(Math.random() * randomSearchQueries.length)];
    return this.getBooks(randomQuery);
  }

  getFavorites(): Book[] {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }

  saveFavorite(book: Book) {
    const favoritesString = localStorage.getItem('favorites');
    const favorites = favoritesString ? JSON.parse(favoritesString) : [];
    favorites.push(book);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}
