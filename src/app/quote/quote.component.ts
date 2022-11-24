import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quote } from '../Models/quote';
import { OneApiService } from '../one-api.service';
import { Location } from '@angular/common';
import { Movie } from '../Models/movie';
import { Character } from '../Models/character';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote?: Quote;
  found : boolean = true;
  movie?: Movie;
  character?: Character;

  constructor(
    private route: ActivatedRoute, 
    private oneApiService: OneApiService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.oneApiService.getQuote(id).forEach((result) => {
      var json = JSON.parse(JSON.stringify(result));
      if(json.docs){
        this.quote = json.docs[0];
        if(this.quote){
          this.oneApiService.getMovie(this.quote.movie).forEach((result) => {
            var json = JSON.parse(JSON.stringify(result));
            this.movie = json.docs[0];
          })
          this.oneApiService.getCharacter(this.quote.character).forEach((result) => {
            var json = JSON.parse(JSON.stringify(result));
            this.character = json.docs[0];
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
