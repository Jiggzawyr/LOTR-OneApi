import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Book } from './Models/book';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OneApiService {

  constructor(private httpClient: HttpClient) { }

  getBooks() {
    return this.httpClient.get("https://the-one-api.dev/v2/book");
  }

  getBook(id: string) {
    return this.httpClient.get("https://the-one-api.dev/v2/book/" + id);
  }

  getBookChapters(id: string) {
    return this.httpClient.get("https://the-one-api.dev/v2/book/" + id + "/chapter");
  }

  getMovies() {
    const headers = new HttpHeaders({'Authorization': ('Bearer ' + environment.accessToken)});
    return this.httpClient.get("https://the-one-api.dev/v2/movie", { headers: headers});
  }

  getMovie(id: string) {
    const headers = new HttpHeaders({'Authorization': ('Bearer ' + environment.accessToken)});
    return this.httpClient.get("https://the-one-api.dev/v2/movie/" + id, { headers: headers});
  }

  getMovieQuotes(id: string, limit: number = 1000) {
    const headers = new HttpHeaders({'Authorization': ('Bearer ' + environment.accessToken)});
    const params = new HttpParams().set('limit', limit);
    return this.httpClient.get("https://the-one-api.dev/v2/movie/" + id + "/quote", { headers: headers, params: params});
  }

  getCharacters(limit: number = 1000, name: string = "", race: string = "", gender: string = "") {
    const headers = new HttpHeaders({'Authorization': ('Bearer ' + environment.accessToken)});
    let params = new HttpParams();
    params = params.set('limit', limit);
    if(name != "") params = params.set('name', "/" + name + "/i");
    if(race != "") params = params.set('race', "/" + race + "/i");
    if(gender != "") params = params.set('gender', gender);
    return this.httpClient.get("https://the-one-api.dev/v2/character" , { headers: headers, params: params});
  }

  getCharacter(id: string) {
    const headers = new HttpHeaders({'Authorization': ('Bearer ' + environment.accessToken)});
    return this.httpClient.get("https://the-one-api.dev/v2/character/" + id, { headers: headers});
  }

  getCharacterQuotes(id: string, limit: number = 1000) {
    const headers = new HttpHeaders({'Authorization': ('Bearer ' + environment.accessToken)});
    const params = new HttpParams().set('limit', limit);
    return this.httpClient.get("https://the-one-api.dev/v2/character/" + id + "/quote", { headers: headers, params: params});
  }

  getQuotes(limit: number = 1000, dialog: string = "") {
    const headers = new HttpHeaders({'Authorization': ('Bearer ' + environment.accessToken)});
    let params = new HttpParams();
    params = params.set('limit', limit);
    if(dialog != "") params = params.set('dialog', "/" + dialog + "/i");
    return this.httpClient.get("https://the-one-api.dev/v2/quote" , { headers: headers, params: params});
  }

  getQuote(id: string) {
    const headers = new HttpHeaders({'Authorization': ('Bearer ' + environment.accessToken)});
    return this.httpClient.get("https://the-one-api.dev/v2/quote/" + id, { headers: headers});
  }

  getChapters(limit: number = 1000, chapterName: string = "") {
    const headers = new HttpHeaders({'Authorization': ('Bearer ' + environment.accessToken)});
    let params = new HttpParams();
    params = params.set('limit', limit);
    if(chapterName != "") params = params.set('chapterName', "/" + chapterName + "/i");
    return this.httpClient.get("https://the-one-api.dev/v2/chapter" , { headers: headers, params: params});
  }

  getChapter(id: string) {
    const headers = new HttpHeaders({'Authorization': ('Bearer ' + environment.accessToken)});
    return this.httpClient.get("https://the-one-api.dev/v2/chapter/" + id, { headers: headers});
  }

}
