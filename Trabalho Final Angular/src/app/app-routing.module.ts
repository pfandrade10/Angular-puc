import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { ComicDetailComponent } from './components/comic-detail/comic-detail.component';
import { ComicListComponent } from './components/comic-list/comic-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

const routes: Routes = [
  {path: "character",component: CharacterListComponent},
  {path: "character/idCharacter/:id",component: CharacterDetailComponent},
  {path: "comic",component: ComicListComponent},
  {path: "comic/idComic/:id",component: ComicDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
