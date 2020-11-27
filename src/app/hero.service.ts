import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // we make the service observable so the caller can subscribe
  getHeroes(): Observable<Hero[]>{
    // todo: send the message _after_ the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
