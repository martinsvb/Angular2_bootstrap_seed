import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { TranslationComponent } from '../shared/translation/translation.component';
import { CacheComponent } from '../shared/cache/cache.component';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent {

    tr: any;
    user: any;

    constructor(
        private _tr: TranslationComponent,
        private _cache: CacheComponent
    ) {
        this.tr = _tr.getTranslation(_cache.getItem('lang'));
        _cache.dataAdded$.subscribe((data: any) => {
            if (data.hasOwnProperty('user')) {
                this.user = data['user'];
            }
            if (data.hasOwnProperty('lang')) {
                this.tr = _tr.getTranslation(data['lang']);
            }
        });
    }
}
