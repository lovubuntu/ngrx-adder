import { Injectable } from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {exhaustMap, map, catchError, tap} from 'rxjs/operators';

import {ActionTypes, Increment, Decrement, Save, Reset, FetchCounter} from '../counter.actions';
import {CounterService} from './counter.service';
import {Counter} from './counter.model';

@Injectable()
export class CounterEffects {
  constructor(private counterService: CounterService, private actions$: Actions) {}

  @Effect()
  saveCounter$ = this.actions$.pipe(
    ofType(ActionTypes.SAVE),
    map((action: Save) => action.payload),
    exhaustMap((value) => this.counterService.saveCounter(value).pipe(
      map((res) => new Increment()),
      catchError(err => of(new Decrement())))
    )
  );

  @Effect()
  getCounter$ = this.actions$.pipe(
    ofType(ActionTypes.FETCH_COUNTER),
    exhaustMap((action: FetchCounter) => this.counterService.getCounter(action.payload).pipe(
      map((res: Counter) => new Reset(res.value)),
      catchError(err => of(new Increment()))
      )
    )
  );
}
