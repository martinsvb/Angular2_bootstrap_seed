import {
  Component,
  Input,
  Output,
  ElementRef,
  EventEmitter,
  NgZone,
  Provider,
  Inject,
  forwardRef,
  ViewChild,
  HostListener
} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {Http, Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';

declare var $: any;

// Control Value accessor provider
const NG2UPLOADER_CONTROL_VALUE_ACCESSOR = new Provider(
  NG_VALUE_ACCESSOR,
  {
    useExisting: forwardRef(() => Ng2Uploader),
    multi: true
  }
);

@Component({
  selector: 'ng2-uploader',
  providers: [NG2UPLOADER_CONTROL_VALUE_ACCESSOR],
  styles: [`
    label.uploader input[type="file"] {
        position: fixed;
        top: -1000px;
    }

    .uploader {
        border: 1px solid #AAA;
        border-radius: 2px;
        padding: 2px 5px;
        display: inline-block;
        cursor: pointer;
    }
    .uploader:hover,
    .uploader:active {
        background: #CCC;
    }
    .uploader:invalid + span {
        color: #A44;
    }
    .uploader:valid + span {
        color: #4A4;
    }

    .imgContainer {
        position: relative;
        min-height: 100px; /* minimum height of cover stripe */
    }
    .imgWrap {
        overflow: hidden;
    }
    .imgDel {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 200;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 18px;
        font-size: 15px;
        font-weight: bold;
        color: #fff;
        border-radius: 50%;
        background: rgb(250, 100, 100); // Fall-back for browsers that don't support rgba
        background: rgba(115, 167, 195, 0.3);
        cursor: pointer;
    }
    .imgDel:hover {
        background: rgb(250, 100, 100); // Fall-back for browsers that don't support rgba
        background: rgba(115, 167, 195, 0.8);
    }
    .sameHeight {
        width: auto; /* maintain width/height aspect ratio */
        height: 100%;
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 100;
        height: 100%;
    }
  `],
  template: `
    <label class="uploader" [hidden]="hideUploader">
        <input type="file" class="fileUpl" (change)="insertFile($event)" />
        <span><i class="fa fa-upload" aria-hidden="true"></i> {{ uploadLabel }}</span>
    </label>
    <div class="row imgContainer">
        <div *ngFor="let img of images; let i = index" class="col-md-4 imgWrap">
            <img src="{{img}}" class="img-fluid sameHeight" />
            <span class="imgDel" title="{{delLabel}}" (click)="deleteFile(img)">x</span>
        </div>
    </div>
  `,
})

export class Ng2Uploader {
    
    /** URL for upload server images */
    @Input() hostUpload: string;

    /** Uploaded images server folder */
    @Input() uploadFolder: string = "";

    /** Label for upload button */
    @Input() uploadLabel: string = "";

    /** Label for delete button */
    @Input() delLabel: string = "";

    /** Set single file upload */
    @Input() single: boolean;

    @Output() change = new EventEmitter<any>();

    public images: Array<string> = [];

    private hideUploader: boolean = false;

    constructor (
        @Inject(ElementRef) private _elementRef: ElementRef,
        private _zone: NgZone,
        private _http: Http
    ) {}
    
    get value(): any { return this.images; };
    @Input() set value(v) {       
        if (v !== this.images) {
            this.images = v;
            this._onChangeCallback(v);
        }
    }

    /**
     * Value update process
     */
    updateValue (value: any) {
        this._zone.run(() => {
            this.images.indexOf(value) > -1
                ? this.images.splice(this.images.indexOf(value), 1)
                : this.images.push(value);
            
            this.onChange(this.images);
            this._onTouchedCallback();
            this.change.emit(this.images);
        });
    }

    insertFile(event: any) {
        this._imageUpload(event.target);
    }

    deleteFile(fileUrl: string) {
        this._mediaDelete(fileUrl)
            .then((resp: any) => { 
                let delImg: any = resp.json();
                if (delImg.deletedFile == fileUrl) {
                    this.updateValue(fileUrl);
                    if (typeof this.single !== 'undefined') {
                        this.hideUploader = false;
                    }
                }
             })
            .catch((err: any) => { this._errHandle(err.json()) });
    }

    private _imageUpload(dataUpload: any) {
        let data = new FormData();
        data.append("file", dataUpload.files[0]);
        data.append("action", "upload");
        data.append("folder", this.uploadFolder);
        $.post({
            data: data,
            type: "POST",
            url: this.hostUpload,
            cache: false,
            contentType: false,
            processData: false,
            success: (uploadedImg: any) => {
                if (typeof this.single !== 'undefined') {
                    this.hideUploader = true;
                }
                this.updateValue(uploadedImg[0]);
            },
            error: (err: any) => { this._errHandle(err) }
        });
    }

    private _mediaDelete(fileUrl: string) {
        let data: any = JSON.stringify({
            action: "del",
            file: fileUrl
        });

        let headers = new Headers({
            'Accept': '*/*',
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({headers: headers});
        
        return this._http.post(this.hostUpload, data, options)
                .toPromise()
                .then((response: any) => response)
                .catch((err: any) => Promise.reject(err.message || err));
    }

    /**
     * Hanle error in console
     */
    private _errHandle(err: any) {
      console.error("Error");
      console.log(err);
    }

    /**
     * Implements ControlValueAccessor
     */
    writeValue (value: any) {}
    onChange(event: any) {}
    onTouched () {}
    registerOnChange (fn: any) { this.onChange = fn; }
    registerOnTouched (fn: any) { this.onTouched = fn; }
    _onChangeCallback (_: any) {}
    _onTouchedCallback () {}
}
