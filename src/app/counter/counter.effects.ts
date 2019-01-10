import { Injectable } from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {exhaustMap, map, catchError} from 'rxjs/operators';

import {ActionTypes, Increment, Decrement, Save} from '../counter.actions';
import {CounterService} from './counter.service';

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
}
