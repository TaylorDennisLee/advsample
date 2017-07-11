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

import { State } from './reducers';
import { AdvActions } from './actions';
import { JsonService } from './json_service';



@Injectable()
export class LoadJsonEffects {

  @Effect() fetch$ = this.actions$
    .ofType(AdvActions.LOAD_SERV_JSON)
    .switchMap(() => this.json_service.getTopLevel())
    .map(top_level => this.adv_actions$.loadServSuccess(top_level));

    constructor(
      private actions$: Actions,
      private adv_actions$: AdvActions,
      private json_service: JsonService
    ) { }

}
