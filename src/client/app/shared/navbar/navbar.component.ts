import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { TranslationComponent } from '../translation/translation.component';
import { CacheComponent } from '../cache/cache.component';

/**
 * This class represents the navigatin bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent {

    lang: string;
    langTr: string;
    tr: any;
    user: any;

    constructor(
        private _tr: TranslationComponent,
        private _cache: CacheComponent,
        private _router: Router
    ) {
        this.lang = _cache.getItem('lang') || "en";
        this.tr = _tr.getTranslation(this.lang);
        this.langTr = this.tr[this.lang];
        _cache.dataAdded$.subscribe((data: any) => {
            if (data.hasOwnProperty('user')) {
                this.user = data['user'];
            }
            if (data.hasOwnProperty('lang')) {
                this.lang = data.lang || "en";
                this.tr = _tr.getTranslation(this.lang);
                this.langTr = this.tr[this.lang];
            }
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

    translation(lang: string) {
        this._cache.setItem('lang', lang);
    }
}
