import { Component, Input, OnInit } from '@angular/core';
import { AlertService, AlertType } from '../../services/alert.service';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {

  constructor(private marvelService: MarvelService,
    private alertService: AlertService) { }
  
  public listComic: any[];
  public listFilteredComic: any[];

  ngOnInit(): void {
    this.populateCharacters();
  }

  // filterCharacter(filter){
  //   this.listFilteredMovie = this.listMovie.filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()))
  // }

  populateCharacters(){
    this.marvelService.listComic().subscribe((response)=>{
      console.log(response)
      this.listComic = response.data.results;
      this.listFilteredComic = response.data.results;
    }),
    (error)=>{
      console.log(error)   
      this.alertService.show('Erro inesperado', error, AlertType.error);
    }
  } 

}
