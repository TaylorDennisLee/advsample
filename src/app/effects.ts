import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';


import { LOAD_SERV_JSON } from './actions';

@Injectable()
export class LoadJsonEffects {

  @Effect() fetch$ = this.actions$
    .ofType(LOAD_SERV_JSON)
    .switchMap( () =>
      { console.log("MOOOOO");
      return Observable.of({type: "SUPER_SIMPLE_EFFECT_HAS_FINISHED"})
      });

    constructor(private actions$: Actions) { }

}
