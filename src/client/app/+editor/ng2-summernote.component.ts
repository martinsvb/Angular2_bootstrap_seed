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
import {SummernoteConfig} from './ng2-summernote.interface';

declare var $: any;

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

    @Input() height: number;
    @Input() minHeight: number;
    @Input() maxHeight: number;
    @Input() placeholder: string;
    @Input() focus: string;
    @Input() airMode: string;
    @Input() dialogsInBody: string;
    @Input() editable: any;
    @Input() lang: string;
    @Input() disableResizeEditor: string;
    @Input() config: any;

    @Output() change = new EventEmitter<any>();

    private _config: any;

    private _value: any;

    private _elementRef: ElementRef;
    private _zone: NgZone;

    constructor (@Inject(ElementRef) elementRef: ElementRef, zone: NgZone) {
        this._elementRef = elementRef;
        this._zone = zone;
    }

    get value(): any { return this._value; };
    @Input() set value(v) {
        if (v !== this._value) {
            this._value = v;
            this._onChangeCallback(v);
        }
    }

    ngAfterViewInit () {}

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

    private _imageUpload(dataUpload: any) {
        if (dataUpload.editable) {
            let data = new FormData();
            data.append("file", dataUpload.files[0]);
            data.append("subject", "test_company");
            data.append("type", "news");
            $.post({
                data: data,
                type: "POST",
                url: "http://spanielovasvj.cz/api/upload",
                cache: false,
                contentType: false,
                processData: false,
                success: (resp: any) => {
                    console.log("success");
                    console.log(resp);
                },
                error: (err: any) => {
                    console.log("error");
                    console.log(err);
                }
            });
        }
    }

    private _mediaDelete(obj: any) {
        console.log('delete media');
        console.log(obj);
    }

    /**
     * Set logical varibles from text input values
     * 
     * @param any variable, logic varible for setting
     * @param boolean defaultValue, this value will be set if variable is not set
     * 
     * @return boolean variable, finally seted variable value
     */
    private _setLogicVars(variable: any, defaultVal?: boolean) {
      variable = typeof variable !== 'undefined' ? true : false; 
      if (!variable && defaultVal) variable = defaultVal;

      return variable;
    }

    /**
     * Implements ControlValueAccessor
     */
    writeValue (value: any) {
        if (value) {
            this._value = value;
            
            this.height = Number(this.height);

            this.editable = this._setLogicVars(this.editable, true);

            this.lang = $.summernote.lang[this.lang] ? this.lang : 'en-US'

            this._config = {
                height: this.height || 200,
                minHeight: Number(this.minHeight) || this.height || 200,
                maxHeight: Number(this.maxHeight) || this.height || 500,
                placeholder: this.placeholder || 'Text...',
                focus: this._setLogicVars(this.focus, false),
                airMode: this._setLogicVars(this.airMode, false),
                dialogsInBody: this._setLogicVars(this.dialogsInBody, false),
                editable: this.editable,
                lang: this.lang,
                disableResizeEditor: this._setLogicVars(this.disableResizeEditor, false),
                callbacks: {
                    onChange: (evt: any) => {
                        this.updateValue(evt);
                    },
                    onInit: (evt: any) => {},
                    onImageUpload: (files: string) => {
                        this._imageUpload({files: files, editable: this.editable});
                    },
                    onMediaDelete: (target: [any]) => {
                        let removedMedia: any = {attrs: {}, tagName: {}};
                        removedMedia.tagName = target[0].tagName;
                        let attributes: any = target[0].attributes;
                        for (let i = 0; i < target[0].attributes.length; i++) {
                            removedMedia.attrs[attributes.name] = attributes[i].value;
                        }
                        this._mediaDelete({target: removedMedia});
                    }
                }
            };
            
            $(this._elementRef.nativeElement).find('.summernote').summernote(this._config);
            $(this._elementRef.nativeElement).find('.summernote').summernote('code', value);
        }
    }
    onChange (_: any) {}
    onTouched () {}
    registerOnChange (fn: any) { this.onChange = fn; }
    registerOnTouched (fn: any) { this.onTouched = fn; }
    _onChangeCallback (_: any) {}
    _onTouchedCallback () {}
}
