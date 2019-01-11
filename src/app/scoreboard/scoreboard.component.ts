import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Scoreboard, PlayerScore } from './scoreboard';
import { IncrementHome, IncrementAway, ResetScore } from './scoreboard.actions';
import { selectHomeScore, selectAwayScore } from './scoreboard.reducer';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  @Input()
  set pending(isPending: boolean) {
    if (isPending) {
      console.warn('am in peding');
      this.homePlayersForm.disable();
      return;
    }
    console.warn('am free');
    this.homePlayersForm.enable();
  }
  @Output()
  scoreSubmit: EventEmitter<PlayerScore> = new EventEmitter();
  scoreboard$: Observable<Scoreboard>;
  homeScore$: Observable<number>;
  awayScore$: Observable<number>;
  homePlayersForm = new FormGroup({
    side: new FormControl('HOME'),
    playerName: new FormControl(''),
    score: new FormControl('')
  });

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

  onSubmit() {
    console.log('submitting', this.homePlayersForm.value);
    this.scoreSubmit.emit(this.homePlayersForm.value);
  }
}
