import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../Models/book';
import { Chapter } from '../Models/chapter';
import { OneApiService } from '../one-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {

  chapter?: Chapter;
  found : boolean = true;
  book?: Book;

  constructor(
    private route: ActivatedRoute, 
    private oneApiService: OneApiService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.oneApiService.getChapter(id).forEach((result) => {
      var json = JSON.parse(JSON.stringify(result));
      if(json.docs){
        this.chapter = json.docs[0];
        if(this.chapter){
          this.oneApiService.getBook(this.chapter.book).forEach((result) => {
            var json = JSON.parse(JSON.stringify(result));
            this.book = json.docs[0];
          })
        }
      } 
      else {
        this.found = false;
      }
    }).catch(error => {
      this.found = false;
    })
  }

  goBack(){
    this._location.back();
  }

}
