import {Action} from '@ngrx/store';

export enum ActionTypes {
  INCREMENT = '[Counter Increment] Increment',
  DECREMENT = '[Counter Decrement] Decrement',
  RESET = '[Counter Reset] Reset',
  SAVE = '[Counter Save] Save'
}

export class Increment implements Action {
  readonly type = ActionTypes.INCREMENT;
}

export class Decrement implements Action {
  readonly type = ActionTypes.DECREMENT;
}

export class Reset implements Action {
  readonly type = ActionTypes.RESET;
}

export class Save implements Action {
  readonly type = ActionTypes.SAVE;
  constructor(public payload: any) {}
}

export type CounterActionsUnion = Increment | Decrement | Reset | Save;
