import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {appConfig} from '../shared/index';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DocsService {

  constructor(
    private _http: Http,
    private _appConfig: appConfig
  ) {}

  getDocs() {
    return this._http.get(this._appConfig.hostApi + '/documentation.php')
               .toPromise()
               .then(response => response)
               .catch(error => Promise.reject(error.message || error));
  }
}
