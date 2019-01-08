import {createSelector} from '@ngrx/store';
import * as ScoreboardActions from './scoreboard.actions';
import {Scoreboard} from './scoreboard';

const initialState = {
  home: 0,
  away: 0
} as Scoreboard;

export const selectScoreboard = (state) => state.scoreboard;

export const selectHomeScore = createSelector(
  selectScoreboard,
  (state: Scoreboard) => state.home
);

export const selectAwayScore = createSelector(
  selectScoreboard,
  (state: Scoreboard) => state.away
);

export function scoreboardReducer(state = initialState, action: ScoreboardActions.ActionsUnion): Scoreboard {
  switch (action.type) {
    case ScoreboardActions.Actions.IncrementHome:
      return {
        ...state,
        home: state.home + 1
      };

    case ScoreboardActions.Actions.IncrementAway:
      return {
        ...state,
        away: state.away + 1
      };

    case ScoreboardActions.Actions.Reset:
      return action.payload;

    default:
      return state;
  }
}
