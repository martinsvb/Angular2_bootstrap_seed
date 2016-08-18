import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ng2Summernote } from 'ng2-summernote/ng2-summernote';
import { Ng2Uploader } from './ng2-uploader';
import { AppConfig, AppRequest } from '../shared/index';
import { NewModel } from './news.interface';
import { TransComponent } from '../shared/translation/translation.component';

@Component({
  moduleId: module.id,
  selector: 'sd-news',
  templateUrl: 'news.component.html',
  directives: [Ng2Summernote, Ng2Uploader],
  providers: [AppConfig, AppRequest, TransComponent]
})

export class NewsComponent {
  
  private _module = "news";

  private _errorMessage: any;

  res: any;

  hostUpload: string;
  uploadFolder: string;
  tr: any;
  appendix: string = 'appendix';
  content: string = 'content';
  image: Array<string> = [];
  gallery: Array<string> = [];
  attachments: Array<string> = [];

  constructor(
    private _appConfig: AppConfig,
    private _TransComponent: TransComponent,
    private _appRequest: AppRequest
  ) {
    this.hostUpload = _appConfig.hostUpload;
    this.uploadFolder = "test_company/news";
    this.tr = _TransComponent.getTranslation();
  }

  model: NewModel = {
    subject: '',
    appendix: this.appendix,
    content: this.content,
    image: this.image,
    gallery: this.gallery,
    attachments: this.attachments
  };
  
  submitted = false;
  
  onSubmit() {
    this.submitted = true;

    this.model.appendix = this.appendix;
    this.model.content = this.content;
    this.model.image = this.image;
    this.model.gallery = this.gallery;
    this.model.attachments = this.attachments;
  }

  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;

  addNew() {
    this.appendix = 'appendix';
    this.content = 'content';
    this.image = this.gallery = this.attachments = [];

    this.model = {
      subject: '',
      appendix: this.appendix,
      content: this.content,
      image: this.image,
      gallery: this.gallery,
      attachments: this.attachments
    };
    
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

    /**
     *  Retrieve data from API
     */
    getAction () {
        
        this._appRequest.getAction(this._module)
                        .subscribe(
                          (news: any) => this.model = news,
                          (error: any) =>  this._errorMessage = error
                        );
    }

    /**
     *  Send delete request to API
     */
    deleteAction () {
        
        this._appRequest.deleteAction(this._module + '/id/test')
                        .subscribe(
                          (res: any) => this.res = res,
                          (error: any) =>  this._errorMessage = error
                        );
    }

    /**
     *  Send create request to API
     */
    postAction () {

        this._appRequest.postAction(this._module, {test: 'test post'})
                        .subscribe(
                          (res: any) => this.res = res,
                          (error: any) =>  this._errorMessage = error
                        );
    }

    /**
     *  Send update request to API
     */
    putAction () {
        
        this._appRequest.putAction(this._module,  {test: 'test put'})
                        .subscribe(
                          (res: any) => this.res = res,
                          (error: any) =>  this._errorMessage = error
                        );
    }
}
