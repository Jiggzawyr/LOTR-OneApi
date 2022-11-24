import { Component, OnInit } from '@angular/core';
import { Quote } from '../Models/quote';
import { OneApiService } from '../one-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [];
  
  dialogFilter: string = "";

  constructor(
    private oneApiService: OneApiService,
    private _location: Location  
  ) { }

  getQuotes() {
    this.oneApiService.getQuotes(20, this.dialogFilter).forEach((result) => {
      var json = JSON.parse(JSON.stringify(result));
      this.quotes = json.docs;
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
