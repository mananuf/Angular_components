import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ArtisteInterface } from './artiste/artisteInterface';
import { ArtisteService } from './services/artiste.service';
// import { artistes } from './artiste/artiste.ts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Artistry';
  query: string;
  artistes:ArtisteInterface[] = [];

  showArtiste(artiste:any){
    this.query = artiste.name
    artiste.highlight = !artiste.highlight
  }
  constructor(private artisteService: ArtisteService){
    this.query = ''

  }

  ngOnInit(): void {
    // get data from server and pass the data into artistes
    this.artisteService.getArtiste().subscribe((data) => (this.artistes = data))
  }
}
