import { Component, OnInit } from '@angular/core';
import { Character } from '../Models/character';
import { OneApiService } from '../one-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];
  
  nameFilter: string = "";
  raceFilter: string = "";
  genderFilter: string = "";
  genders: string[] = ["", "Male", "Female"];

  constructor(
    private oneApiService: OneApiService,
    private _location: Location  
  ) { }

  getCharacters() {
    this.oneApiService.getCharacters(20, this.nameFilter, this.raceFilter, this.genderFilter).forEach((result) => {
      var json = JSON.parse(JSON.stringify(result));
      this.characters = json.docs;
    })
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  goBack(){
    this._location.back();
  }

  search(){
    this.getCharacters();
  }

}
