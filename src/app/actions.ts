import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { LevelZero } from './level.model';


@Injectable()
export class AdvActions {

  static LOAD_SERV_JSON = 'LOAD_SERV_JSON';
  loadServJson(): Action {
    return {
      type: AdvActions.LOAD_SERV_JSON
    };
  }

  static LOAD_SERV_SUCCESS = 'LOAD_SERV_SUCCESS';
  loadServSuccess(level_zero): Action {
    return {
      type: AdvActions.LOAD_SERV_SUCCESS,
      payload: level_zero
    };
  }

  static SWITCH_CENTER = 'SWITCH_CENTER';
  switchCenter(level_one, level_two): Action {
    return {
      type: AdvActions.SWITCH_CENTER,
      payload: {level_one_index : level_one, level_two_index: level_two}
    };
  }

  static TOGGLE_LEVEL_TWO = 'TOGGLE_LEVEL_TWO';
  toggleLevelTwo(level_one, level_two): Action {
    return {
      type: AdvActions.TOGGLE_LEVEL_TWO,
      payload: {level_one_index : level_one, level_two_index: level_two}
    };
  }

}
