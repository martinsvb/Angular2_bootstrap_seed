import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';
import * as moment from 'moment';
import {DocsService} from './docs.service';
import {AlertComponent, ACCORDION_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {appConfig} from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'sd-docs',
  directives: [AlertComponent, ACCORDION_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
  templateUrl: 'docs.component.html',
  providers: [DocsService, appConfig]
})

export class DocsComponent {
  docs: any;
  error: any;
  namespaces: any;

  constructor(private DocsService: DocsService) {}

  getDocs() {
    this.DocsService
        .getDocs()
        .then(resp => {
          this.docs = resp.json();
          this.namespaces = Object.keys(this.docs);
        })
        .catch(error => this.error = error);
  }

  ngOnInit() {
    console.info("DocsComponent loaded...");
    this.getDocs();
  }

  public alerts:Array<Object> = [
    {
      type: 'danger',
      msg: 'Oh snap! Change a few things up and try submitting again.'
    },
    {
      type: 'success',
      msg: 'Well done! You successfully read this important alert message.',
      closable: true
    }
  ];
 
  public closeAlert(i:number):void {
    this.alerts.splice(i, 1);
  }
 
  public addAlert():void {
    this.alerts.push({msg: 'Another alert!', type: 'warning', closable: true});
  }
}
