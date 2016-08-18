import { Injectable } from '@angular/core';

/**
 *  Cache component
 */
@Injectable()
export class CacheComponent {
    
    private _data: any = {};

    setItem(key: string, data: any) {
        this._data[key] = data;
    }

    getItem(key: string) {
        let result = 0;

        if (this._data.hasOwnProperty(key)) {
            result = this._data[key];
        }

        return result;
    }
}
