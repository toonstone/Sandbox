import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  // Reserve the constructor for simple initialization such as wiring constructor parameters to properties.
  constructor(private heroService: HeroService) { }

  // use this to makes HTTP requests to a remote server as a real data service would to retrieve data etc.
  ngOnInit() {
    this.getHeroes();
  }

  // using arrow functions
  onSelect = (hero: Hero) => {
    this.selectedHero = hero;
  }

  getHeroes = () => {
    // The new version waits for the Observable to emit the array of heroes
    // which could happen now or several minutes from now. Then subscribe passes the emitted array to the callback
    // which sets the component's heroes property.
    this.heroService.getHeroes()
                    .subscribe(oreos => this.heroes = oreos);

    // verbose
    // this.heroService.getHeroes()
    //                 .subscribe((oreos: Hero[]) => {this.heroes = oreos; });
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   console.log(hero);
  // }
}
