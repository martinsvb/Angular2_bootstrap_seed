import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TransComponent } from '../translation/translation.component';
import { CacheComponent } from '../cache/cache.component';

/**
 * This class represents the navigatin bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [TransComponent]
})

export class NavbarComponent {

    languages: Array<string>;
    tr: any;
    user: any;

    constructor(
        private _TransComponent: TransComponent,
        private _cache: CacheComponent
    ) {
        this.tr = _TransComponent.getTranslation();
        this.user = _cache.getItem('user');
    }

    logout() {
        this.user = {
            name: 'guest',
            role: 'guest',
            modules: {}
        };

        this._cache.setItem('user', this.user);
    }
}
