import {Action} from '@ngrx/store';
import {Scoreboard} from './scoreboard';

export enum Actions {
	IncrementHome = '[Scoreboard] Increment Home',
	IncrementAway = '[Scoreboard] Increment Away',
	Reset = '[Scoreboard] Reset'
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

export type ActionsUnion = IncrementHome | IncrementAway | ResetScore;
