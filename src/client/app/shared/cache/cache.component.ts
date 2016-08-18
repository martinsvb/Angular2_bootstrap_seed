import { Injectable } from '@angular/core';

/**
 *  Cache helper
 */
@Injectable()
export class CacheComponent {
    
    private _data: any = {};

    setItem(key: string, data: any) {
        let result = 0;

        if (!this._data.hasOwnProperty(key)) {
            this._data[key] = data;
            result = 1;
        }

        return result;
    }

    getItem(key: string) {
        let result = 0;

        if (this._data.hasOwnProperty(key)) {
            result = this._data[key];
        }

        return result;
    }
}
