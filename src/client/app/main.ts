import { enableProdMode } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { Http } from '@angular/http';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { AppModule } from './app.module';;

import { AppComponent } from './app.component';


if ('<%= ENV %>' === 'prod') { enableProdMode(); }

platformBrowserDynamic().bootstrapModule(AppModule);