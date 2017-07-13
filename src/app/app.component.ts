import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Http } from '@angular/http';
import { LevelZero, LevelOne, LevelTwo, LevelThree } from './level.model';
import * as fromReducers from './reducers';

import { AdvActions } from './actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'app';
  top_level: Observable<LevelZero>;
  middle_column: Observable<LevelTwo>;
  constructor(
    private store: Store<fromReducers.State>,
    private advActions: AdvActions
  )
  {
    this.top_level = this.store.select('level_zero');
    this.middle_column = this.store.select('middle_column');
  }

  ngOnInit() {
    this.store.dispatch(this.advActions.loadServJson());
    //this.store.dispatch(this.advActions.switchCenter(0,0));
  }

  switchMid(level_two: LevelTwo) {
    console.log("Switch Mid");
    this.store.dispatch(this.advActions.switchCenter(level_two.level_one_index, level_two.level_two_index));
  }

  addLevelTwo(level_two: LevelTwo) {
    console.log("Add Level Two");
    //this.store.dispatch(this.advActions.switchCenter(level_two.level_one_index, level_two.level_two_index));
    this.store.dispatch(this.advActions.addLevelTwo(level_two.level_one_index, level_two.level_two_index));
  }

  removeLevelTwo(level_two: LevelTwo) {
    //this.store.dispatch(this.advActions.switchCenter(level_two.level_one_index, level_two.level_two_index));
    this.store.dispatch(this.advActions.removeLevelTwo(level_two.level_one_index, level_two.level_two_index));
  }

  addLevelThree(level_three: LevelThree) {
    this.store.dispatch(this.advActions.addLevelThree(level_three.level_one_index, level_three.level_two_index, level_three.level_three_index));
  }

  removeLevelThree(level_three: LevelThree) {
    this.store.dispatch(this.advActions.removeLevelThree(level_three.level_one_index, level_three.level_two_index, level_three.level_three_index));
  }

  levelTwoToggle(toggled_level_two: LevelTwo) {
    this.store.dispatch(this.advActions.toggleLevelTwo(toggled_level_two.level_one_index, toggled_level_two.level_two_index));
  }

  levelThreeToggle(toggled_level_three: LevelThree)
  {
    this.store.dispatch(this.advActions.toggleLevelThree(
                          toggled_level_three.level_one_index,
                          toggled_level_three.level_two_index,
                          toggled_level_three.level_three_index
                            )
                       );
  }

}
