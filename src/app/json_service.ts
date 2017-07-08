import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {LevelZero, LevelOne, LevelTwo, LevelThree} from '../models';

@Injectable()
export class JsonService {
    constructor (private http: Http) {}


    getTopLevel(): Observable<LevelZero> {
        return this.http.get('/assets/serv-1.json')
        .map(res => res.json());
    }

}
