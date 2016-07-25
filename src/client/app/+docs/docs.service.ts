import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { appConfig } from '../shared/index';

import 'rxjs/add/operator/toPromise';

@Injectable()
@Component({
  providers: [appConfig]
})
export class DocsService {

  private docsUrl = this._appConfig.hostUrl + '/documentation.php';  // URL to web api

  constructor(
    private _http: Http,
    private _appConfig: appConfig
  ) {}

  getDocs() {
    return this._http.get(this.docsUrl)
               .toPromise()
               .then(response => response)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
