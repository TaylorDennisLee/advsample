import { ActionReducer, Action } from '@ngrx/store';

import { LevelZero, LevelOne, LevelTwo, LevelThree } from './level.model';


import { AdvActions } from './actions';



export interface State {
  level_zero: LevelZero;
  middle_column: LevelTwo;
};


export const initialState: State = {
  level_zero: { subservices: [] },
  middle_column: {
    service_code: '',
    service_name: '',
    active: false,
    subservices: [],
    sub_count: 0,
    sub_active: 0,
    level_one_index: 0,
    level_two_index: 0
  }

}


export function levelZeroReducer(state = initialState, action: Action ) {
  switch (action.type) {
          case AdvActions.LOAD_SERV_SUCCESS: {
            console.log(action.payload);
            state.level_zero = action.payload;
            return state;
            }
          case AdvActions.SWITCH_CENTER: {
            let level_one = action.payload.level_one_index;
            let level_two = action.payload.level_two_index;
            state.middle_column = state.level_zero.subservices[level_one].subservices[level_two];
            return state;
            }
          case AdvActions.TOGGLE_LEVEL_TWO: {
            let level_one = action.payload.level_one_index;
            let level_two = action.payload.level_two_index;
            state.level_zero.subservices[level_one].subservices[level_two].active = !state.level_zero.subservices[level_one].subservices[level_two].active;
            return state;
          }



          default: {return state;}

        }
}

//export const getActiveSubCount = (state: State) => state.level_two.sub_count;
//export const getTotalSubCount  = (state: State) => state.level_two.sub_active;
