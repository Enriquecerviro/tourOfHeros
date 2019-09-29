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
  hero: Hero;


  //inject the HeroService into a private heroService property.
  constructor(private heroService: HeroService) { }

  //lifecycle hook calls getHeroes().
  ngOnInit() {
    this.getHeroes();
  }
 

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 5));
  }
  //PARA MOBILES: aqui si pulsamos el dedo en el div se ve la info
  //enterea sin truncar la string
  displayTextMobile() {
    document.getElementById("module hero").innerHTML = this.hero.name;
  }

}