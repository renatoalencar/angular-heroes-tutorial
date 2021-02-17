import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

interface Fact {
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient, private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    this.messageService.add('Hero Service: fetched heroes')
    return heroes;
  }

  getFacts(): Observable<Fact[]> {
    return this.http.get<Fact[]>('https://cat-fact.herokuapp.com/facts')
  }
}
