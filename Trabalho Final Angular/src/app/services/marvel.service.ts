import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private apiKey = 'b8d41b891224d81d063b66d0f6cfedc0';
  private privateApiKey = 'f51512c73116a033a0fba295670d3c1b2001549f';
  private apiUrl = 'https://gateway.marvel.com:443/v1/public';
  ts = new Date().getTime();
  stringToHash = this.ts + this.privateApiKey + this.apiKey;
  hash = Md5.hashStr(this.stringToHash);

  constructor(private http: HttpClient) { }

  listCharacter(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/characters?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`);
  }

  getCharacter(idCharacter): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/characters/${idCharacter}?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`);
  }

  listComic(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/comics?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`);
  }

  getComic(idComic): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/comics/${idComic}?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`);
  }
}
