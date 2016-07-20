import {
  Component,
  Input,
  Output,
  ElementRef,
  ViewChild,
  Inject,
  Provider,
  forwardRef,
  EventEmitter,
  NgZone,
  Renderer
} from '@angular/core';
import {
  NgControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import {
  SummernoteConfig
} from './ng2-summernote.interface';

declare var jQuery: any;

// Control Value accessor provider
const SUMMERNOTE_VALUE_ACCESSOR = new Provider(
  NG_VALUE_ACCESSOR,
  {
    useExisting: forwardRef(() => Ng2SummernoteComponent),
    multi: true
  }
);

const noop = () => {};

@Component({
  selector: 'ng2-summernote',
  providers: [SUMMERNOTE_VALUE_ACCESSOR],
  template: `<div class="summernote">Text...</div>`
})

export class Ng2SummernoteComponent {
  
  elementRef: ElementRef;
  @Input() config: SummernoteConfig;
  @Output() change = new EventEmitter();
  
  // The internal data model
  private _value: any = '';
  
  get value(): any { return this._value; };
  set value(v) {
    if (v !== this._value) {
      this._value = v;
      this._onChangeCallback(v);
    }
  }

  zone: any;

  constructor(@Inject(ElementRef) elementRef: ElementRef, zone: NgZone) {
      this.elementRef = elementRef;
  }

  /**
   * On component view init
   */
  ngAfterViewInit() {
    var config = this.config || {
        height: 200,
        minHeight: 200,
        maxHeight: 0,
        placeholder: Text,
        focus: true,
        airMode: false,
        dialogsInBody: false,
        callbacks: {}
    };

    jQuery(this.elementRef.nativeElement).find('.summernote').summernote(config);
  }

  /**
   * Implements ControlValueAccessor
   */
  writeValue(value: any){
    this._value = value;
  }
  onChange(_: any){}
  onTouched(){}
  registerOnChange(fn: any){this.onChange = fn;}
  registerOnTouched(fn: any){this.onTouched = fn;}
  _onChangeCallback(_: any){}
  _onTouchedCallback(){}
}

// element.summernote('code')
// element.summernote('isEmpty')
// element.append(value);
