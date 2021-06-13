  import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '../../models/imovie';
import { AlertService, AlertType } from '../../services/alert.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private movieService: MovieService,
    private alertService: AlertService) { }
  
  public filter = 'Movies';
  public listMovie: IMovie[];
  public listFilteredMovie: IMovie[];
  
  ngOnInit(): void {
    this.populateMovies();
  }

  filterMovie(filter){
    this.listFilteredMovie = this.listMovie.filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()))
  }

  populateMovies(){
    this.movieService.getMovies().subscribe((response)=>{
      this.listMovie = response.results;
      this.listFilteredMovie = response.results;
    }),
    (error)=>{
      console.log(error)   
      this.alertService.show('Erro inesperado', error, AlertType.error);
    }
  } 

  onOrderBy(orderField: string): void {
    //console.log(this.listFilteredMovie);
    this.listFilteredMovie.sort((a, b) => {
      return b[orderField] - a[orderField]
    })
  }
}
