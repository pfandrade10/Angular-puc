import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private marvelService: MarvelService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.marvelService.getCharacter(params.id).subscribe(result => {
        this.characterDetail = result;
      });
    });
  }

}
