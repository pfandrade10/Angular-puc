import { IMovie } from "./imovie";

export interface IMovieApiResponse {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
  }