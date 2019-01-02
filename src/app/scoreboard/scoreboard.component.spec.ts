import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';

import { ScoreboardComponent } from './scoreboard.component';
import {counterReducer} from '../counter.reducer';
import {scoreboardReducer} from './scoreboard.reducer';
import {IncrementHome, IncrementAway, ResetScore} from './scoreboard.actions';
import {Scoreboard} from './scoreboard';


describe('ScoreboardComponent', () => {
  let component: ScoreboardComponent;
  let fixture: ComponentFixture<ScoreboardComponent>;
  let store: Store<Scoreboard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreboardComponent ],
      imports: [
        StoreModule.forRoot({
          counter: counterReducer,
          scoreboard: scoreboardReducer
        }),
      ]
    })
    .compileComponents();
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment home score', () => {
    const incrementHomeAction = new IncrementHome();
    component.incrementHome();

    expect(store.dispatch).toHaveBeenCalledWith(incrementHomeAction);
  });

  it('should increment Away Score', () => {
    const incrementAwayAction = new IncrementAway();
    component.incrementAway();

    expect(store.dispatch).toHaveBeenCalledWith(incrementAwayAction);
  })

  it('should reset the score', () => {
    const resetPayload = {home: 0, away: 0} as Scoreboard;
    const resetAction = new ResetScore(resetPayload);
    component.resetScore();

    expect(store.dispatch).toHaveBeenCalledWith(resetAction);
  })

  it('should update scoreboard when an action is emitted', () => {
    component.incrementHome();

    component.scoreboard$.subscribe(data => expect(data).toEqual({home: 1, away: 0}));
  });
});
