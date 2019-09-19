import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  /**
   * AQUI LO QUE HACEMOS ES EXPONER EL ARRAY
   * PARA ATARLO EN UNA VAR.
   */
  heroes : Hero[];
  selectedHero: Hero;//selectedHero TENDRA UN ID Y UN NOMBRE
/**
 * The parameter simultaneously defines a private
 *  heroService property and identifies it as a
 *  HeroService injection site
 * @param heroService 
 */
  constructor(private heroService: HeroService) { }
  //Reserve the constructor for simple initialization such as wiring constructor parameters to properties. 

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
/**
 waits for the Observable to emit the array of heroes 
 which could happen now or several minutes from now.
 The subscribe() method passes the emitted array
 to the callback, which sets the component's heroes property.
 */
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe( heroes => this.heroes = heroes);
  }

}
/**
 * The two components will have a parent/child
 * relationship. The parent HeroesComponent 
 * will control the child HeroDetailComponent by
 * sending it a new hero to display whenever the
 * user selects a hero from the list.
 */