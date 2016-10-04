import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { 
  AlertComponent,
  AccordionComponent
} from 'ng2-bootstrap/ng2-bootstrap';

import { NavbarComponent } from './shared/navbar/index';
import { CacheComponent } from './shared/cache/cache.component';
import { TranslationComponent } from './shared/translation/translation.component';

import { HomeModule } from './+home/home.module';

@NgModule({
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule,
    HomeModule
  ],
  declarations: [
    AccordionComponent,
    AlertComponent,
    NavbarComponent,    
    AppComponent
  ],
  providers: [
    {
        provide: APP_BASE_HREF,
        useValue: '<%= APP_BASE %>'
    },
    NavbarComponent,
    CacheComponent,
    TranslationComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }