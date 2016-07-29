import {Component} from '@angular/core';
import {Ng2Summernote} from 'ng2-summernote/ng2-summernote';
import {appConfig} from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'sd-editor',
  template: `
  <div class="row">
    <div class="col-md-6">
      <ng2-summernote [(ngModel)]="data" lang="cs-CZ" serverImgUp hostUpload="{{hostUpload}}" uploadFolder="{{uploadFolder}}"></ng2-summernote>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
      <ng2-summernote [(ngModel)]="data2" height="500" lang="cs-CZ"></ng2-summernote>
    </div>
  </div>
  <p>data: {{data}}</p>
  <p>data: {{data2}}</p>
  `,
  directives: [Ng2Summernote],
  providers: [appConfig]
})

export class EditorComponent {
  data: any = 'EditorComponent';
  data2: any = '<p>EditorComponent2</p><p>Next paragraph</p>';
  hostUpload: string;
  uploadFolder: string;

  constructor(
    private _appConfig: appConfig
  ) {
    this.hostUpload = this._appConfig.hostUpload;
    this.uploadFolder = "test_company/news";
  }
}
