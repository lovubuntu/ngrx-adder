import {Action} from '@ngrx/store';
import {ActionTypes} from './counter.actions';

export const initialState = 0;

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return state + 1;
    case ActionTypes.DECREMENT:
      return state - 1;
    case ActionTypes.RESET:
      return action.payload;
    default:
      return state;
  }
}
