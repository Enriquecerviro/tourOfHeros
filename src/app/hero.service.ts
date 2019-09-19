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

  getHeroes(): Observable<Hero[]> {
    this.MessageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  constructor(private MessageService: MessageService) { }
//Reserve the constructor for simple initialization such as wiring constructor parameters to properties. 

}
