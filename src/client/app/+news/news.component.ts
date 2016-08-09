import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ng2Summernote } from 'ng2-summernote/ng2-summernote';
import { Ng2Uploader } from './ng2-uploader';
import { appConfig } from '../shared/index';
import { New } from './news.interface';
import { TransHelper } from '../shared/translation/translation.component';

@Component({
  moduleId: module.id,
  selector: 'sd-news',
  templateUrl: 'news.component.html',
  directives: [Ng2Summernote, Ng2Uploader],
  providers: [appConfig, TransHelper]
})

export class NewsComponent {
  hostUpload: string;
  uploadFolder: string;
  tr: any;
  image: Array<string> = [];
  appendix: string = 'appendix';
  content: string = 'content';

  constructor(
    private _appConfig: appConfig,
    private _TransHelper: TransHelper
  ) {
    this.hostUpload = _appConfig.hostUpload;
    this.uploadFolder = "test_company/news";
    this.tr = _TransHelper.getTranslation();
  }

  model: New = {
    subject: '',
    appendix: this.appendix,
    content: this.content,
    image: this.image,
    gallery: '',
    attachments: ''
  };
  
  submitted = false;
  
  onSubmit() {
    this.submitted = true;

    this.model.appendix = this.appendix;
    this.model.content = this.content;
    this.model.image = [];
  }

  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;

  addNew() {
    this.appendix = 'appendix';
    this.content = 'content';

    this.model = {
      subject: '',
      appendix: this.appendix,
      content: this.content,
      image: this.image,
      gallery: '',
      attachments: ''
    };
    
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
