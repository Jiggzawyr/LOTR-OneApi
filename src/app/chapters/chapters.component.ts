import { Component, OnInit } from '@angular/core';
import { Chapter } from '../Models/chapter';
import { OneApiService } from '../one-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  chapters: Chapter[] = [];
  
  chapterNameFilter: string = "";

  constructor(
    private oneApiService: OneApiService,
    private _location: Location  
  ) { }

  getQuotes() {
    this.oneApiService.getChapters(20, this.chapterNameFilter).forEach((result) => {
      var json = JSON.parse(JSON.stringify(result));
      this.chapters = json.docs;
    })
  }

  ngOnInit(): void {
    this.getQuotes();
  }

  goBack(){
    this._location.back();
  }

  search(){
    this.getQuotes();
  }

}
