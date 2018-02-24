import { Injectable } from '@angular/core';
import { Hero } from './hero'
import { heroList } from './mock-heroes'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'
import { MessageService } from './message.service'
@Injectable()
export class HeroService {
  constructor(private msgservice: MessageService) { }
  getHeroes():Observable<Hero[]>{  
    this.msgservice.add('HeroService: fetch heroes.');
    return of(heroList);
  }
}
