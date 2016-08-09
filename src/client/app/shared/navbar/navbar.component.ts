import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TransHelper } from '../translation/translation.component';

/**
 * This class represents the navigatin bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [TransHelper]
})

export class NavbarComponent {

    languages: Array<string>;
    tr: any;

    constructor(
        private _TransHelper: TransHelper
    ) {
        this.tr = _TransHelper.getTranslation();
    }
}
