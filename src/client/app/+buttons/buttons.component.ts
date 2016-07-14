import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { FORM_DIRECTIVES } from '@angular/forms';
import { BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'sd-buttons',
  templateUrl: 'buttons.component.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, BUTTON_DIRECTIVES]
})

export class ButtonsComponent {
  singleModel: string = '1';
  radioModel: string = 'Middle';
  checkModel: any = {left: false, middle: true, right: false};

  ngOnInit() {
    console.info("ButtonsComponent loaded...");
  }
}
