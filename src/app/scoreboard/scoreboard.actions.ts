import {Action} from '@ngrx/store';
import {Scoreboard} from './scoreboard';

export enum Actions {
  IncrementHome = '[Scoreboard] Increment Home',
  IncrementAway = '[Scoreboard] Increment Away',
  Reset = '[Scoreboard] Reset',
  Pending = '[Scoreboard] Pending',
  Success = '[Scoreboard] Success'
}

export class IncrementHome implements Action {
  readonly type = Actions.IncrementHome;
}

export class IncrementAway implements Action {
  readonly type = Actions.IncrementAway;
}

export class ResetScore implements Action {
  readonly type = Actions.Reset;
  constructor(public payload: Scoreboard) {
  }
}

export class Pending implements Action {
  readonly type = Actions.Pending;
}

export class Success implements Action {
  readonly type = Actions.Success;
}

export type ActionsUnion = IncrementHome | IncrementAway | ResetScore | Pending | Success;
