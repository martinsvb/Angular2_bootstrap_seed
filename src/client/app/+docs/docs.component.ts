import { Component } from '@angular/core';
import { DocsService } from './docs.service';

@Component({
  moduleId: module.id,
  selector: 'sd-docs',
  templateUrl: 'docs.component.html',
  providers: [
    DocsService,
  ]
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