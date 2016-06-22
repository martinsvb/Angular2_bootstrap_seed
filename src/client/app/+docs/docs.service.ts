import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DocsService {

  private docsUrl = 'http://spanielovasvj.cz/api/news';  // URL to web api

  constructor(private http: Http) { }

  getDocs() {
    
    return this.http.get(this.docsUrl)
               .toPromise()
               .then(response => response)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}