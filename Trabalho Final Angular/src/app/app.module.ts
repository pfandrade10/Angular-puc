import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterItemComponent } from './components/character-item/character-item.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { ComicDetailComponent } from './components/comic-detail/comic-detail.component';
import { ComicItemComponent } from './components/comic-item/comic-item.component';
import { ComicListComponent } from './components/comic-list/comic-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    MovieListComponent,
    MovieDetailComponent,
    MovieItemComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CharacterListComponent,
    CharacterItemComponent,
    CharacterDetailComponent,
    ComicDetailComponent,
    ComicItemComponent,
    ComicListComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule, 
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
