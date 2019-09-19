import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

// TODO: https://angular.io/guide/template-syntax#inputs-outputs
// This component simply receives a hero object through its hero property and displays it.
  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
