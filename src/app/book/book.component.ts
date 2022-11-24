import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../Models/book';
import { Chapter } from '../Models/chapter';
import { OneApiService } from '../one-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book?: Book;
  chapters: Chapter[] = [];
  found: boolean = true;

  constructor(
    private route: ActivatedRoute, 
    private oneApiService: OneApiService,
    private _location: Location
  ) { }
  
  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.oneApiService.getBook(id).forEach((result) => {
      var json = JSON.parse(JSON.stringify(result));
      if(json.docs){
        this.book = json.docs[0];
      } 
      else {
        this.found = false;
      }
    })
    if(this.found){
      this.oneApiService.getBookChapters(id).forEach((result) => {
        var json = JSON.parse(JSON.stringify(result));
        this.chapters = json.docs;
      })
    }
  }

  goBack(){
    this._location.back();
  }

}
