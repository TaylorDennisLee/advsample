import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Http } from '@angular/http';
import { LevelZero, LevelOne, LevelTwo, LevelThree } from './level.model';
import * as fromReducers from './reducers';


import { ADD_LEVEL_2, REMOVE_LEVEL_2, TOGGLE_LEVEL_2,
          ADD_LEVEL_3, REMOVE_LEVEL_3, TOGGLE_LEVEL_3,
          LOAD_SERV_JSON, LoadServJsonAction
} from './actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  //top_level: Observable<LevelZero>;
  top_level: LevelZero;
  top_level_active = false;
  constructor(private store: Store<fromReducers.State>, private _http: Http) {
    this.loadDataFromJson().subscribe(x => this.top_level = x);
    console.log(this.top_level);
    this.store.dispatch({type: LOAD_SERV_JSON, payload: this.top_level});
    //this.store.dispatch(new LoadServJsonAction(this.first_data));
    //this.top_level = this.store.select('level_zero');
  }


  loadDataFromJson() {
    const url = 'assets/serv-1.json';
    return this._http.get(url).map(x => <LevelZero>x.json());
  }

  lvlToggle(levelThreeService: LevelThree)
  {
    this.store.dispatch({type: LOAD_SERV_JSON})
    if (levelThreeService.active) {
      this.store.dispatch({type: REMOVE_LEVEL_3});
    }
    if (!levelThreeService.active) {
      this.store.dispatch({type: ADD_LEVEL_3});
    }

    levelThreeService.active = !levelThreeService.active;
  }

  topToggle()
  {
    if (this.top_level_active == true) {
      console.log("Dispatch: REMOVE_LEVEL_2");
      this.store.dispatch({type: REMOVE_LEVEL_2});
      this.top_level_active = false;
    }
    else if (this.top_level_active == false) {
      console.log("Dispatch: ADD_LEVEL_2");
      this.store.dispatch({type: ADD_LEVEL_2});
      this.top_level_active = true;
    }
  }


}
