// modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

// components
import { AppComponent } from './app.component';
// services

import { ArtisteService } from './services/artiste.service';
import { ArtisteItemComponent } from './components/artiste-item/artiste-item.component';
import { SearchArtistePipe } from './pipes/search-artiste.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArtisteItemComponent,
    SearchArtistePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ArtisteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
