import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookFavoritesComponent } from './book-favorites/book-favorites.component';

const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'list/:search', component: BooksListComponent },
  { path: 'details/:key', component: BookDetailsComponent },
  { path: 'favorites', component: BookFavoritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
