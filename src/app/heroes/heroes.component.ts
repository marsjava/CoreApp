import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { heroList } from '../mock-heroes'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  //Hero h1 = new Hero();

  hList = heroList;

  selectedHero: Hero;
  
  onSelect(h: Hero): void {
    this.selectedHero = h;
  }

  h1: Hero ={
    id: 1, 
    name: 'Einstin'
  };

  constructor() { }

  ngOnInit() {
  }

}
