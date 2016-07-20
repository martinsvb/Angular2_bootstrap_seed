import {Component} from '@angular/core';
import {Ng2SummernoteComponent} from './accessor.component';

@Component({
  selector: 'sd-editor',
  template: `
  <div class="row">
  <div class="col-md-6">
  <ng2-summernote [(ngModel)]="data"></ng2-summernote>
  </div>
</div>
  <p>data: {{data}}</p>
  `,
  directives: [Ng2SummernoteComponent]
})

export class EditorComponent {
  data: any = 'EditorComponent';
}
