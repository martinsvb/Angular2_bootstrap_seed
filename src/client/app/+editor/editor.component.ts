import {Component} from '@angular/core';
import {CKEditor} from 'ng2-ckeditor';

@Component({
  selector: 'sd-editor',
  directives: [CKEditor],
  templateUrl: 'editor.component.html'
})

export class EditorComponent {
  ckeditorContent = `<p>My HTML</p>`;
}
