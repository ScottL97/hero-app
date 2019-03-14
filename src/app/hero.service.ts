import { Injectable } from '@angular/core';
import { Hero, HEROES} from './heroes/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageSerivce: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    this.messageSerivce.add('HeroService: fetched heroes!');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    this.messageSerivce.add(`HeroService: fetched hero id=${id}!`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
