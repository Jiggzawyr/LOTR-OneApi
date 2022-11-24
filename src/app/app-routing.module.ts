import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { ChapterComponent } from './chapter/chapter.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { MainComponent } from './main/main.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'book', component: BooksComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'movie', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'character', component: CharactersComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'quote', component: QuotesComponent },
  { path: 'quote/:id', component: QuoteComponent },
  { path: 'chapter', component: ChaptersComponent },
  { path: 'chapter/:id', component: ChapterComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
