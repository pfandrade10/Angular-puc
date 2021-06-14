import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService, AlertType } from '../../services/alert.service';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {

  public comicDetail: any;

  constructor(
    private route: ActivatedRoute,
    private marvelService: MarvelService,
    private alertService: AlertService,
  ) {}

  ngOnInit(): void {
    this.populateComic()
  }

  populateComic(){
    this.route.params.subscribe((params) => {
      this.marvelService.getComic(params.id).subscribe(response => {
        this.comicDetail = response.data.results[0];
        console.log(this.comicDetail)
      }),
      (error)=>{
        console.log(error)   
        this.alertService.show('Erro inesperado', error, AlertType.error);
      };
    });  
  } 

}
