import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from '../hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap} from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  private heroesUrl = 'api/heroes';

  getHeroes = (): Observable<Hero[]> => {

    // .pipes are RxJS 5.5 see https://blog.hackages.io/rxjs-5-5-piping-all-the-things-9d469d1b3f44
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.logMessage('fetching all heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getHero = (id: number): Observable<Hero> => {

    const url = `${this.heroesUrl}/${id}`;

    return this.http.get<Hero>(url)
      .pipe(
        tap(_ => this.logMessage(`fetching hero id=${id}`)),
        catchError(this.handleError<Hero>('getHero'))
      );
    }

  updateHero = (hero: Hero): Observable<any> => {

    return this.http.put(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap(_ => this.logMessage(`updating hero id=${hero.id}`)),
        catchError(this.handleError<any>('Updating Hero'))
      );
  }

  addHero = (hero: Hero): Observable<Hero> => {

    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap(_ => this.logMessage(`creating hero name=${hero.name}`)),
        catchError(this.handleError<Hero>('Adding Hero'))
      );
  }

  deleteHero = (hero: Hero | number): Observable<Hero> => {

    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions)
      .pipe(
        tap(_ => this.logMessage(`deleting hero id=${id}`)),
        catchError(this.handleError<Hero>('Deleting Hero'))
      );
  }

  searchHeroes = (term: string): Observable<Hero[]> => {
    
    if (!term.trim()) {
        return of([]);
    }

    return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
      tap(_ => this.logMessage(`found heroes matching ${term}`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  private logMessage = (message: string) => this.messageService.add(message);

  //  Handle Http operation that failed.
  //  Let the app continue.
  //  @param operation - name of the operation that failed
  //  @param result - optional value to return as the observable result
  // this returns a function!
  handleError<T> (operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.logMessage(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  }

}
