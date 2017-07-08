import { Action } from '@ngrx/store';
import { LevelZero } from './level.model';

// Level 2 Action Constants
export const ADD_LEVEL_2 = "ADD_LEVEL_2";
export const REMOVE_LEVEL_2 = "REMOVE_LEVEL_2";
export const TOGGLE_LEVEL_2 = "TOGGLE_LEVEL_2";

// Level 3 Action Constants
export const ADD_LEVEL_3 = "ADD_LEVEL_3";
export const REMOVE_LEVEL_3 = "REMOVE_LEVEL_3";
export const TOGGLE_LEVEL_3 = "TOGGLE_LEVEL_3";

export const LOAD_SERV_JSON = "LOAD_SERV_JSON";
export const JSON_LOAD_SUCCESS = "JSON_LOAD_SUCCESS";

export class LoadServJsonAction implements Action {
  readonly type = LOAD_SERV_JSON;

  constructor(public payload: LevelZero) { }
}
