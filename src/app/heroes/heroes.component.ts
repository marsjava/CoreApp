import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { heroList } from '../mock-heroes';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	
	selectedHero: Hero;
  myHeroes: Hero[];
  constructor(private service: HeroService) { 
    //this.getMyHeroes();
  }
  getMyHeroes(): void{
    this.service.getHeroes().subscribe(data=>this.myHeroes=data);
    //this.myHeroes = this.service.getHeroes();
    //this.hService.getHeroes().subscribe(myHeros=>this.myHeroes = myHeros)
  }
  ngOnInit() {
     this.getMyHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}