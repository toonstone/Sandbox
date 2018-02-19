import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Hero } from '../hero';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  // Remember that the component class does not subscribe to the heroes$ observable. That's the job of the AsyncPipe in the template.
  heroes$: Observable<Hero[]>;

  // A Subject is both a source of observable values and an Observable itself. You can subscribe to a Subject as you would any Observable.
  // A SUBJECT can be both an OBSERVABLE which you can subscribe to and 'observe' and an OBSERVER
  private searchTerms = new Subject<string>(); // RxJS subject???

  constructor(private heroService: HeroService) { }

  digit: number;

  ngOnInit() {
   
    this.heroes$ = this.searchTerms.pipe(

      // this is an example of chaining Rxjs operators
      // wait 300ms after each key stroke before processing the search term - emits value after 300ms so reducing http requests
      // here using the heroService
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes - cancels and discards previous search observables, returns only latest search service observable
      switchMap(searchTerm => this.heroService.searchHeroes(searchTerm))
    );
  }
  
  search = (term: string) => {
    // Push a search term into the observable stream
    this.searchTerms.next(term);
  }

}
