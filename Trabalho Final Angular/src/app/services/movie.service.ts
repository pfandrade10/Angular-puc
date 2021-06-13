import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovieApiResponse } from '../models/imovie-api-response';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey = 'bf9d9aeea02a2d6090078ca5e60d33a7';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<IMovieApiResponse> {
    return this.http.get<IMovieApiResponse>(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`);
  }

  getMovieDetail(idMovie): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/movie/${idMovie}?api_key=${this.apiKey}`);
  }
}

