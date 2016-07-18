import {Component, ElementRef, Inject} from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'sd-editor',
  templateUrl: 'editor.component.html'
})

export class EditorComponent {
  elementRef: ElementRef;

  constructor(@Inject(ElementRef) elementRef: ElementRef) {
      this.elementRef = elementRef;
  }

  ngOnInit() {
      jQuery(this.elementRef.nativeElement).find('#summernote').summernote();
  }
}
