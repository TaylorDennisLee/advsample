import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {LevelZero, LevelOne, LevelTwo, LevelThree} from './level.model';

@Injectable()
export class JsonService {
    constructor (private http: Http) {}


    getTopLevel(): Observable<LevelZero> {
        return this.http.get('assets/serv-2.json')
        .map(res => res.json());
    }

}
