import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { AppConfig, AppRequest } from '../shared/index';
import { TranslationComponent } from '../shared/translation/translation.component';
import { CacheComponent } from '../shared/cache/cache.component';
import { CompanyModel } from './company.interface';
import { CompanyComponent } from './company.component';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'companies',
    templateUrl: 'companies.component.html',
    providers: [AppConfig, AppRequest],
    directives: [CORE_DIRECTIVES, CompanyComponent, AlertComponent]
})
export class CompaniesComponent {
  
  private _apiUrl = "company";
  private _errorMessage: any;

  tr: any;
  alerts: any = {};
  companies: [CompanyModel];
  selectedCompany: CompanyModel;
  showCompany: boolean = false;
  action: string = "update";
  
  constructor(
    private _tr: TranslationComponent,
    private _cache: CacheComponent,
    private _appRequest: AppRequest
  ) {
    this.tr = _tr.getTranslation(_cache.getItem('lang'));

    _cache.dataAdded$.subscribe((data: any) => {
        if (data.hasOwnProperty('lang')) {
          this.tr = _tr.getTranslation(data['lang']);
        }
    });

    this.getCompanies();
  }

  getCompanies() {
    this._appRequest.getAction(this._apiUrl)
                .subscribe((res: [CompanyModel]) => {
                    if (res.length > 0) {
                        this.companies = res;
                    }
                },
                (error: any) => console.log(error)
                );
  }

  newCompany() {
    this.selectedCompany = {
        id: 0,
        name: '',
        ico: '',
        email: '',
        active: false,
        street: '',
        street_nr: '',
        city: '',
        zip: '',
        phone: [''],
        ts_created: 0
    };
    this.showCompany = true;
    this.action = "create";
  }

  selectCompany(company: CompanyModel) {
      this.selectedCompany = company;
      this.showCompany = true;
      this.action = "update";
  }

  compSubmit(event: string) {
    if (event != "list") {
        this.alerts.info = event;
    }
    this.showCompany = false;
    this.getCompanies();
  }

  closeAlert(alert: string) {
    this.alerts[alert] = null;
  }

  compChange(index: number) {
    
    let company: CompanyModel = this.companies[index];

    company.active = !company.active;
    
    let sendData = [company];

    this._appRequest.putAction(this._apiUrl, sendData)
                    .subscribe((res: any) => {
                        if (res.hasOwnProperty("warning")) {
                            this.alerts.warning = this.tr[res.warning];
                        }

                        if (res.hasOwnProperty("info")) {
                            if (res.info === 1) {
                                this.alerts.info = this.tr.companyChanged;
                            }

                            if (res.info === 0) {
                                this.alerts.warning = this.tr.companyNotChanged;
                                this.companies[index].active = !this.companies[index].active;
                            }
                        }
                    },
                        (error: any) => this.companies[index].active = !this.companies[index].active
                    );
  }
}
