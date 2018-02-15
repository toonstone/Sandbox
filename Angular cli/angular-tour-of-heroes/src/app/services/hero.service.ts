import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from '../hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes = (): Observable<Hero[]> => {

    this.messageService.add('Heroservice is fetching heroes...');
    // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
    return of(HEROES);
  }

  getHero = (id: number): Observable<Hero> => {

    this.messageService.add(`Heroservice is fetching a hero of id=${id}`);

    const selectedHero = HEROES.find(hero => hero.id === id);
    return of(selectedHero);
  }
}
