import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes';
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
  heroes = HEROES;
  selectedHero: Hero;//selectedHero TENDRA UN ID Y UN NOMBRE

  constructor() { }

  ngOnInit() {
  }
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

}
