import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Scoreboard, PlayerScore, PlayingSide } from './scoreboard/scoreboard';
import { Pending, Success, IncrementHome } from './scoreboard/scoreboard.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adder';
  pending$: Observable<boolean>;
  constructor(private store: Store<{scoreboard: Scoreboard}>) {
    this.pending$ = store.pipe(select('pending'));
  }

  onSubmit(payload: PlayerScore) {
    if (payload.side === PlayingSide.Home) {
      this.store.dispatch(new Pending());
      for (let i = 0; i < payload.score; i++) {
        this.store.dispatch(new IncrementHome());
      }
      this.store.dispatch(new Success());
    }
  }
}
