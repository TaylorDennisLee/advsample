export interface LevelZero {
  subservices: Array<LevelOne>;
}


export interface LevelOne {
  service_code: string;
  service_name: string;
  subservices: Array<LevelTwo>;
  level_one_index: number;
}


export interface LevelTwo {
  service_code: string;
  service_name: string;
  active: boolean;
  subservices: Array<LevelThree>;
  sub_count: number;
  sub_active: number;
  level_one_index: number;
  level_two_index: number;
}


export interface LevelThree {
  service_code: string;
  service_name: string;
  active: boolean;
  level_one_index: number;
  level_two_index: number;
  level_three_index: number;
}
