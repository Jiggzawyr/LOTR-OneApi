import { Component, OnInit } from '@angular/core';
import { Movie } from '../Models/movie';
import { OneApiService } from '../one-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = []

  constructor(
    private oneApiService: OneApiService,
    private _location: Location  
  ) { }

  ngOnInit(): void {
    this.oneApiService.getMovies().forEach((result) => {
      var json = JSON.parse(JSON.stringify(result));
      this.movies = json.docs;
    })
  }

  goBack(){
    this._location.back();
  }

}
