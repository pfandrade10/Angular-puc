import { Component } from '@angular/core';
import { IMovie } from './models/imovie';
import { AlertService, AlertType } from './services/alert.service';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private movieService: MovieService,
    private alertService: AlertService) { }
  
  public title = 'Movies';
  public listMovie: IMovie[];
  
  listedMovies = [];
  
  ngOnInit(): void {
    this.populateMovies();
  }

  filterMovie(filter){
    const results = this.listMovie.filter(movie => movie.title.includes(filter) || movie.vote_count == parseInt(filter));
    if(results.length > 0){
      this.listedMovies = results;
    } else {
      this.listedMovies = this.listMovie;
    }
  }

  populateMovies(){
    this.movieService.getMovies().subscribe((response)=>{
      this.listMovie = response.results
    }),
    (error)=>{
      console.log(error)   
      this.alertService.show('Erro inesperado', error, AlertType.error);
    }
  }
}
