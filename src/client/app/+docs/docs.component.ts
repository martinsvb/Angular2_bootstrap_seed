import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { FORM_DIRECTIVES } from '@angular/forms';
import * as moment from 'moment';
import { DocsService } from './docs.service';
import { AppConfig } from '../shared/index';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { AlertComponent, ACCORDION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'sd-docs',
  directives: [AlertComponent, ACCORDION_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
  templateUrl: 'docs.component.html',
  providers: [AppConfig, DocsService, NavbarComponent]
})

export class DocsComponent {
  docs: any;
  error: any;
  namespaces: any;

  constructor(private DocsService: DocsService, private _nav: NavbarComponent) {}

  getDocs() {
    this.DocsService
        .getDocs()
        .then(resp => {
          this.docs = resp.json().data || {};
          this.namespaces = Object.keys(this.docs);
        })
        .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getDocs();
  }

    showLink(link: string) {
        return this._nav.showLink(link);
    }
}
