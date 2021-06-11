import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  @Output() filter = "";
  @Output() newFilterEvent = new EventEmitter<string>();

  onInputChange(name: string){
    const handleString = name.charAt(0).toUpperCase() + name.substr(1);
    this.newFilterEvent.emit(handleString);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
