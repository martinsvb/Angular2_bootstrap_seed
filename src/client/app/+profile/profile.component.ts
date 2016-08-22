import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppConfig, AppRequest } from '../shared/index';
import { ProfileModel } from './profile.interface';
import { TransComponent } from '../shared/translation/translation.component';
import { CacheComponent } from '../shared/cache/cache.component';

@Component({
  moduleId: module.id,
  selector: 'sd-profile',
  templateUrl: 'profile.component.html',
  providers: [AppConfig, AppRequest, TransComponent]
})

export class ProfileComponent {
  
  private _apiUrl = "user";
  private _errorMessage: any;

  res: any;

  hostUpload: string;
  
  tr: any;

  model: ProfileModel;

  constructor(
    private _appConfig: AppConfig,
    private _TransComponent: TransComponent,
    private _cache: CacheComponent,
    private _appRequest: AppRequest
  ) {
    this.hostUpload = _appConfig.hostUpload;
    this.tr = _TransComponent.getTranslation();
        this.tr = _TransComponent.getTranslation();
        _cache.dataAdded$.subscribe((user: any) => {
            this.model = user;
            this.model.chpassword = false;
            this.model.password = "";
            this.model.newpassword = "";
            this.model.newrepassword = "";
        });
  }

  isValid() {
    let valid = true;

    if (!this.model.email || !this.model.role) {
      valid = false;
    }

    if (this.model.chpassword && (
        !this.model.password || this.model.password.length < 5 ||
        !this.model.newpassword || this.model.newpassword.length < 5 ||
        !this.model.newrepassword || this.model.newrepassword.length < 5
    )) {
      valid = false;
    }

    return valid;
  }

  /**
   *  Send update request to API
   */
  changeProfile() {
      
      let sendData = [this.model];

      this._appRequest.putAction(this._apiUrl, sendData)
                      .subscribe(
                        (res: any) => this.res = res,
                        (error: any) =>  this._errorMessage = error
                      );
  }
}
