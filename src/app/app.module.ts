import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookFavoritesComponent } from './book-favorites/book-favorites.component';
import { SharedModule } from './_shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    SearchPageComponent,
    BooksListComponent,
    BookFavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
