import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ng2Summernote } from 'ng2-summernote/ng2-summernote';
import { AppConfig, AppRequest } from '../shared/index';
import { TransComponent } from '../shared/translation/translation.component';
import { RegisterModel } from './register.interface';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'sd-register',
  templateUrl: 'register.component.html',
  directives: [AlertComponent],
  providers: [AppConfig, AppRequest, TransComponent]
})

export class RegisterComponent {
  
  private _apiUrl = "user";
  private _errorMessage: any;

  tr: any;
  res: any;

  regAlerts: any = {};

  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active: boolean = true;

  model: RegisterModel = {
    name: '',
    email: '',
    password: '',
    repassword: ''
  };

  constructor(
    private _appConfig: AppConfig,
    private _TransComponent: TransComponent,
    private _appRequest: AppRequest
  ) {
    this.tr = _TransComponent.getTranslation();
  }

  /**
   *  Registration request
   */
  register() {
    
    let sendData = [this.model];

    this._appRequest.postAction(this._apiUrl, sendData)
                    .subscribe((res: any) => {
                        if (res.hasOwnProperty("regWarning")) {
                          this.regAlerts.regWarning = this.tr[res.regWarning];
                        }

                        if (res.hasOwnProperty("regInfo")) {
                          if (res.regInfo === 1) {
                            this.regAlerts.regInfo = this.tr.userRegistered;

                            this.model = {
                              name: '',
                              email: '',
                              password: '',
                              repassword: ''
                            };

                            this.active = false;
                            setTimeout(() => this.active = true, 0);
                          }

                          if (res.regInfo === 0) {
                            this.regAlerts.regWarning = this.tr.userRegistrationError;
                          }
                        }
                    },
                    (error: any) =>  this._errorMessage = error);
  }

  /**
   *  Close registration info alert
   */
  closeAlert(alert: string) {
    this.regAlerts[alert] = null;
  }
}
