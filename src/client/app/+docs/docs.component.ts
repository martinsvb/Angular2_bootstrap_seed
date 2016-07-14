import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { DocsService } from './docs.service';
import { ACCORDION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'sd-docs',
  directives: [ACCORDION_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
  templateUrl: 'docs.component.html',
  providers: [DocsService]
})

export class DocsComponent {
  docs: any;
  error: any;
  namespaces: any;

  constructor(private DocsService: DocsService) { }

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
    this.getDocs();
  }
}
