import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  // heroes array property.
  heroes: Hero[] = [];

  //inject the HeroService into a private heroService property.
  constructor(private heroService: HeroService) { }

  //lifecycle hook calls getHeroes().
  ngOnInit() {
    this.getHeroes();
  }
 

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}