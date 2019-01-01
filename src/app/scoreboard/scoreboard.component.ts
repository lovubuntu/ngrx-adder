import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Scoreboard } from './scoreboard';
import { IncrementHome, IncrementAway, ResetScore } from './scoreboard.actions';
import { selectHomeScore, selectAwayScore } from './scoreboard.reducer';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  scoreboard$: Observable<Scoreboard>;
  homeScore$: Observable<number>;
  awayScore$: Observable<number>;

  constructor(private store: Store<{scoreboard: Scoreboard}>) {
	this.scoreboard$ = store.pipe(select('scoreboard'));
	this.homeScore$ = store.pipe(select(selectHomeScore));
	this.awayScore$ = store.pipe(select(selectAwayScore));
  }

  ngOnInit() {
  }

  incrementHome() {
  	this.store.dispatch(new IncrementHome());
  }

  incrementAway() {
  	this.store.dispatch(new IncrementAway());
  }

  resetScore() {
  	this.store.dispatch(new ResetScore({home: 0, away: 0}));
  }
}
