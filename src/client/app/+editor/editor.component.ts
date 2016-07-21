import {Component} from '@angular/core';
import {Ng2SummernoteComponent} from './ng2-summernote.component';

@Component({
  selector: 'sd-editor',
  template: `
  <div class="row">
    <div class="col-md-6">
      <ng2-summernote [(ngModel)]="data" height="500" lang="pt-PT" editable focus></ng2-summernote>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
      <ng2-summernote [(ngModel)]="data2" placeholder="test" lang="cs-CZ"></ng2-summernote>
    </div>
  </div>
  <p>data: {{data}}</p>
  <p>data: {{data2}}</p>
  `,
  directives: [Ng2SummernoteComponent]
})

export class EditorComponent {
  data: any = 'EditorComponent';
  data2: any = '<p>EditorComponent2</p><p>Next paragraph</p>';
}
