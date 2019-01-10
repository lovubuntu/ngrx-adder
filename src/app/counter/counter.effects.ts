import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {mergeMap, map, catchError} from 'rxjs/operators';
import {Action} from '@ngrx/store';

import {ActionTypes, Increment, Decrement} from '../counter.actions';

@Injectable()
export class CounterEffects {
  constructor(private http: HttpClient, private actions$: Actions) {}

  @Effect()
  saveCounter$ = this.actions$.pipe(
    ofType(ActionTypes.SAVE),
    map(action => {
      console.log('inside effects', action);
      return action.payload;
    }),
    map(value => {
      const data = {url: 'api/counters', data: {counter: value}};
      console.log(data);
      return data;
    }),
    mergeMap(payload => this.http.post(payload.url, payload.data).pipe(
      map((res) => new Increment()),
      catchError(err => of(new Decrement())))
    )
  );
}
