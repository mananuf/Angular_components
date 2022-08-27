import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ArtisteInterface } from '../artiste/artisteInterface';

@Injectable({
  providedIn: 'root'
})
export class ArtisteService {
  artiste_api_url = 'http://localhost:3000/artistes';
  constructor(private http: HttpClient) { }

  getArtiste(): Observable<ArtisteInterface[]>{
    return  this.http.get<ArtisteInterface[]>(this.artiste_api_url);
  }
}
