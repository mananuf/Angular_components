import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { artistes } from './artiste/artiste';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Artistry';
  query: string;
  artistes = artistes;

  showArtiste(artiste:any){
    this.query = artiste.name
  }
  constructor(){
    this.query = ''
  }
}
