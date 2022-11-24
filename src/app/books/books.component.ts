import { Component, OnInit } from '@angular/core';
import { Book } from '../Models/book';
import { OneApiService } from '../one-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  constructor(
    private oneApiService: OneApiService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.oneApiService.getBooks().forEach((result) => {
      var json = JSON.parse(JSON.stringify(result));
      this.books = json.docs;
    })
  }

  goBack(){
    this._location.back();
  }

}
