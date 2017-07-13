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
    service_name: 'Please Select Services',
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
            let level_one_index = action.payload.level_one_index;
            let level_two_index = action.payload.level_two_index;
            state.middle_column = state.level_zero.subservices[level_one_index].subservices[level_two_index];
            return state;
            }

          case AdvActions.ADD_LEVEL_TWO: {
            let level_one_index = action.payload.level_one_index;
            let level_two_index = action.payload.level_two_index;
            let this_level_two = state.level_zero.subservices[level_one_index].subservices[level_two_index];
            this_level_two.active = true;
            this_level_two.sub_active = this_level_two.sub_count;
            for (var lvl_three of this_level_two.subservices) {
                lvl_three.active = true;
            }
            state.level_zero.subservices[level_one_index].subservices[level_two_index] = this_level_two;
            return state;
            }

          case AdvActions.REMOVE_LEVEL_TWO: {
            let level_one_index = action.payload.level_one_index;
            let level_two_index = action.payload.level_two_index;
            let this_level_two = state.level_zero.subservices[level_one_index].subservices[level_two_index];
            this_level_two.active = false;
            this_level_two.sub_active = 0;
            for (var lvl_three of this_level_two.subservices) {
                lvl_three.active = false;
            }
            state.level_zero.subservices[level_one_index].subservices[level_two_index] = this_level_two;
            return state;
            }

          case AdvActions.ADD_LEVEL_THREE: {
            let level_one_index   = action.payload.level_one_index;
            let level_two_index   = action.payload.level_two_index;
            let level_three_index = action.payload.level_three_index;
            let this_level_two = state.level_zero.subservices[level_one_index].subservices[level_two_index];
            this_level_two.sub_active += 1
            this_level_two.active = true;
            this_level_two.subservices[level_three_index].active = true;
            state.level_zero.subservices[level_one_index].subservices[level_two_index] = this_level_two;
            return state;
            }

          case AdvActions.REMOVE_LEVEL_THREE: {
            let level_one_index   = action.payload.level_one_index;
            let level_two_index   = action.payload.level_two_index;
            let level_three_index = action.payload.level_three_index;
            let this_level_two = state.level_zero.subservices[level_one_index].subservices[level_two_index];
            this_level_two.sub_active += -1
            if (this_level_two.sub_active == 0) {
              this_level_two.active = false;
            }
            this_level_two.subservices[level_three_index].active = false;
            state.level_zero.subservices[level_one_index].subservices[level_two_index] = this_level_two;
            return state;
            }

          default: {return state;}

        }
}
