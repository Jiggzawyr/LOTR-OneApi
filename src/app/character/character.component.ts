import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../Models/character';
import { OneApiService } from '../one-api.service';
import { Location } from '@angular/common';
import { Quote } from '../Models/quote';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character?: Character;
  found: boolean = true;
  quotes: Quote[] = [];

  constructor(
    private route: ActivatedRoute, 
    private oneApiService: OneApiService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.oneApiService.getCharacter(id).forEach((result) => {
      var json = JSON.parse(JSON.stringify(result));
      if(json.docs){
        this.character = json.docs[0];
      } 
      else {
        this.found = false;
      }
    }).catch(error => {
      this.found = false;
    })
    if(this.found){
      this.oneApiService.getCharacterQuotes(id, 10).forEach((result) => {
        var json = JSON.parse(JSON.stringify(result));
        this.quotes = json.docs;
      })
    }
  }

  goBack(){
    this._location.back();
  }

}
