import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../Models/movie';
import { OneApiService } from '../one-api.service';
import { Location } from '@angular/common';
import { Quote } from '../Models/quote';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie?: Movie;
  quotes: Quote[] = [];
  found: boolean = true;

  constructor(
    private route: ActivatedRoute, 
    private oneApiService: OneApiService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.oneApiService.getMovie(id).forEach((result) => {
      var json = JSON.parse(JSON.stringify(result));
      if(json.docs){
        this.movie = json.docs[0];
      } 
      else {
        this.found = false;
      }
    }).catch(error => {
      this.found = false;
    })
    if(this.found){
      this.oneApiService.getMovieQuotes(id, 10).forEach((result) => {
        var json = JSON.parse(JSON.stringify(result));
        this.quotes = json.docs;
      })
    }
  }

  goBack(){
    this._location.back();
  }

}

