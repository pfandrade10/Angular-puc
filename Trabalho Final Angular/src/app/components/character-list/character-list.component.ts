import { Component, OnInit } from '@angular/core';
import { AlertService, AlertType } from '../../services/alert.service';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  constructor(private marvelService: MarvelService,
    private alertService: AlertService) { }
  
  public listCharacter: any[];
  public listFilteredCharacter: any[];
  
  ngOnInit(): void {
    this.populateCharacters();
  }

  // filterCharacter(filter){
  //   this.listFilteredMovie = this.listMovie.filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()))
  // }

  populateCharacters(){
    this.marvelService.listCharacter().subscribe((response)=>{
      this.listCharacter = response.results;
      this.listFilteredCharacter = response.results;
    }),
    (error)=>{
      console.log(error)   
      this.alertService.show('Erro inesperado', error, AlertType.error);
    }
  } 
}
