import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
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

    @Input() loginChange: any;

    constructor(
        private _TransComponent: TransComponent,
        private _cache: CacheComponent,
        private _router: Router
    ) {
        this.tr = _TransComponent.getTranslation();
        _cache.dataAdded$.subscribe((user: any) => {
            this.user = user;
        });
    }

    logout() {
        this.user = {
            name: 'guest',
            role: 'guest',
            modules: {}
        };

        this._cache.setItem('user', this.user);

        this._router.navigate(['/']);
    }
}
