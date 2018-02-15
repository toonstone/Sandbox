import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute, // The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent
    private heroService: HeroService,
    private location: Location // The location is an Angular service for interacting with the browser.
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero = () => {
    // extract the id from the route
    // the + in javascript converts a string to a number
    const id = +this.route.snapshot.paramMap.get('id');

    this.heroService.getHero(id)
      .subscribe(heroResponse => this.hero = heroResponse);
  }

  goBack = () => {
    this.location.back();
  }
}
