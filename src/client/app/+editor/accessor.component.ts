// Imports
import {
  Component,
  Input,
  Output,
  ElementRef,
  EventEmitter,
  NgZone,
  Provider,
  Inject,
  forwardRef
} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

declare var jQuery: any;

// Control Value accessor provider
const NG2SUMMERNOTE_CONTROL_VALUE_ACCESSOR = new Provider(
  NG_VALUE_ACCESSOR,
  {
    useExisting: forwardRef(() => Ng2SummernoteComponent),
    multi: true
  }
);

@Component({
  selector: 'ng2-summernote',
  providers: [NG2SUMMERNOTE_CONTROL_VALUE_ACCESSOR],
  template: `<div class="summernote"></div>`,
})

export class Ng2SummernoteComponent {

    private _config: any;
    @Output() change = new EventEmitter<any>();

    private _value: any;

    private _elementRef: ElementRef;
    private _zone: NgZone;

    constructor (@Inject(ElementRef) elementRef: ElementRef, zone: NgZone) {
        this._elementRef = elementRef;
        this._zone = zone;
        
        this._config = {
            height: 200,
            minHeight: 200,
            maxHeight: 0,
            placeholder: '',
            focus: true,
            airMode: false,
            dialogsInBody: false,
            callbacks: {
                onChange: (evt: any) => {
                    this.updateValue(evt);
                },
                onInit: (evt: any) => {}
            }
        };
    }

    get value(): any { return this._value; };
    @Input() set value(v) {
        if (v !== this._value) {
            this._value = v;
            this._onChangeCallback(v);
        }
    }

    ngAfterViewInit () { }

    /**
     * Value update process
     */
    updateValue (value: any) {
        this._zone.run(() => {
            this._value = value;
            
            this.onChange(value);
            this._onTouchedCallback();
            this.change.emit(value);
        });
    }

    ngOnDestroy () {}

    /**
     * Implements ControlValueAccessor
     */
    writeValue (value: any) {
        if (value) {
            this._value = value;
            this._config.placeholder = value;
            
            jQuery(this._elementRef.nativeElement).find('.summernote').summernote(this._config);
        }
    }
    onChange (_: any) {}
    onTouched () {}
    registerOnChange (fn: any) { this.onChange = fn; }
    registerOnTouched (fn: any) { this.onTouched = fn; }
    _onChangeCallback (_: any) {}
    _onTouchedCallback () {}
}
