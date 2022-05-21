import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../Hero'
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private apiUrl=' http://localhost:3003/AllHeroes'

  constructor( private http: HttpClient) { }

  getHeroes(): Observable<Hero[]>{
  return this.http.get<Hero[]>(this.apiUrl);
  }
}
