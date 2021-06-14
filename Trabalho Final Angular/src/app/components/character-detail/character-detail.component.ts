import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService, AlertType } from '../../services/alert.service';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  public characterDetail: any = {};

  constructor(
    private route: ActivatedRoute,
    private marvelService: MarvelService,
    private alertService: AlertService,
  ) {}

  ngOnInit(): void {
    

    this.populateCharacter()
  }

  populateCharacter(){
    this.route.params.subscribe((params) => {
      this.marvelService.getCharacter(params.id).subscribe(response => {
        this.characterDetail = response.data.results[0];
        console.log(this.characterDetail)
      }),
      (error)=>{
        console.log(error)   
        this.alertService.show('Erro inesperado', error, AlertType.error);
      };
    });  
  } 
}
