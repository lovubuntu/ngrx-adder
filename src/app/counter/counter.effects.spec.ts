import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot, cold } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { CounterEffects } from './counter.effects';
import { CounterService } from './counter.service';
import * as CounterActions from '../counter.actions';

describe('Counter Effects', () => {
  let effects: CounterEffects;
  let actions: Observable<any>;
  const counterServiceSpy = jasmine.createSpyObj('CounterService', ['saveCounter', 'getCounter']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        CounterEffects,
        provideMockActions(() => actions),
        {provide: CounterService, useValue: counterServiceSpy}
      ]
    });
    effects = TestBed.get(CounterEffects);
  });

  it('should increment counter when it gets saved successfully', () => {
    const saveCounterAction = new CounterActions.Save(42);
    const incrementCounterAction = new CounterActions.Increment();

    const saveSuccess = cold('--r|', {r: 42});

    counterServiceSpy.saveCounter.and.returnValue(saveSuccess);

    actions = hot('-a-', {a: saveCounterAction});
    const expected = cold('---i', {i: incrementCounterAction});
    expect(effects.saveCounter$).toBeObservable(expected);
  });

  it('should decrement counter when there is an error while saving', () => {
    const saveCounterAction = new CounterActions.Save(42);
    const decrementCounterAction = new CounterActions.Decrement();

    const saveFailure = cold('--#');
    counterServiceSpy.saveCounter.and.returnValue(saveFailure);
    actions = hot('-a', {a: saveCounterAction});
    const expected = cold('---d', {d: decrementCounterAction});

    expect(effects.saveCounter$).toBeObservable(expected);
  });
});
