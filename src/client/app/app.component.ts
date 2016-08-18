import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { NavbarComponent } from './shared/index';
import { CacheComponent } from './shared/cache/cache.component';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  viewProviders: [HTTP_PROVIDERS],
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
export class AppComponent {

  constructor (private _cache: CacheComponent) {
    this._cache.setItem('user', {
      name: 'guest',
      role: 'guest',
      modules: {}
    });
  }
}
