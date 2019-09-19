/**
 * The HeroService could get hero data from anywhere—
 * a web service,local storage, or a mock data source.
 * Removing data access from components means you can
 * change your mind about the implementation anytime,
 *  without touching any components.
 *  They don't know how the service works.
 */
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService} from './message.service';

//TODO: https://angular.io/tutorial/toh-pt4#injectable-services
//TODO: https://angular.io/guide/dependency-injection FULLEXPLAINED
@Injectable({
  providedIn: 'root'
})


export class HeroService {

  constructor(private messageService: MessageService) { }
//Reserve the constructor for simple initialization such as wiring constructor parameters to properties. 

    getHeroes(): Observable<Hero[]> {
      this.messageService.add('HeroService: fetched heroes');
      return of(HEROES);
    }
    getHero(id: number): Observable<Hero> {
      // TODO: send the message _after_ fetching the hero
      this.messageService.add(`HeroService: fetched hero id=${id}`);
      return of(HEROES.find(hero => hero.id === id));
    }

}
