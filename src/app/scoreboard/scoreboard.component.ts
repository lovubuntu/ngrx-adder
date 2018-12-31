import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Scoreboard } from './scoreboard';
import { IncrementHome, IncrementAway, ResetScore } from './scoreboard.actions';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  scoreboard$: Observable<Scoreboard>;

  constructor(private store: Store<{scoreboard: Scoreboard}>) {
  	this.scoreboard$ = store.pipe(select('scoreboard'));
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
