import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterItemComponent } from './components/character-item/character-item.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { ComicDetailComponent } from './components/comic-detail/comic-detail.component';
import { ComicItemComponent } from './components/comic-item/comic-item.component';
import { ComicListComponent } from './components/comic-list/comic-list.component';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    HeaderComponent,
    FooterComponent,
    CharacterListComponent,
    CharacterItemComponent,
    CharacterDetailComponent,
    ComicDetailComponent,
    ComicItemComponent,
    ComicListComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule, 
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
