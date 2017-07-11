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
  }

  switchMid(level_one_index: number, level_two_index: number) {
    this.store.dispatch(this.advActions.switchCenter(level_one_index, level_two_index));
  }

  levelTwoToggle(toggled_level_two: LevelTwo) {
    this.store.dispatch(this.advActions.toggleLevelTwo(toggled_level_two.level_one_index, toggled_level_two.level_two_index));
  }

  levelThreeToggle(toggled_level_three: LevelThree)
  {
    toggled_level_three.active = !toggled_level_three.active;
  }

}
