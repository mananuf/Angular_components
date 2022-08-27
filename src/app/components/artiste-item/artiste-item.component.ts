import { Component, Input, OnInit } from '@angular/core';
import { ArtisteInterface } from 'src/app/artiste/artisteInterface';

@Component({
  selector: 'app-artiste-item',
  templateUrl: './artiste-item.component.html',
  styleUrls: ['./artiste-item.component.css'],
  inputs: ['artiste']
})
export class ArtisteItemComponent implements OnInit {
  artiste!: any;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
