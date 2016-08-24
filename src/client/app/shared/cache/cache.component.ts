import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/**
 *  Cache component
 */
@Injectable()
export class CacheComponent {
    
    private _subject = new BehaviorSubject<any>(0);
    dataAdded$ = this._subject.asObservable();

    private _data: any = {};

    setItem(key: string, data: any) {
        this._data[key] = data;
        this._subject.next(this._data);
    }

    getItem(key: string) {
        let result: any;

        if (this._data.hasOwnProperty(key)) {
            result = this._data[key];
        }

        return result;
    }
}
