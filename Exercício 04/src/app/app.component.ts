import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movies';
  movies = [
    {
      id: 1,
      title: 'Mortal Kombat',
      imgUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
    },
    {
      id: 2,
      title: "Tom Clancy's Without Remorse",
      imgUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uHEZ4ZMziIjlAgCTQAEh9ROvtj0.jpg',
    },
    {
      id: 3,
      title: 'Godzilla vs. Kong',
      imgUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/klAIFewuqcyEmH1SMtR2XbMyqzM.jpg',
    },
   
    {
      id: 4,
      title: 'Those Who Wish Me Dead',
      imgUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lkp6LB2ZfKC4TrGhUJu376PaTFg.jpg',
    },
    {
      id: 5,
      title: 'The Unholy',
      imgUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oPyGrEVmjtt1NiPunNDyjE1SVNh.jpg',
    },
    {
      id: 6,
      title: 'Nobody',
      imgUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rbsSpGLtphV5ESeLx1GTqZm7Xnn.jpg',
    },
  ];

  listedMovies = [];

  filterMovie(name){
    const results = this.movies.filter(m => m.title.startsWith(name));
    if(results.length > 0){
      this.listedMovies = results;
    } else {
      this.listedMovies = this.movies;
    }
  }
}
