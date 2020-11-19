// angular modules
import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { HttpClientModule }      from '@angular/common/http';

// imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule }  from 'angular-in-memory-web-api';
import { AppData }               from './data/app-data';

import { AppRoutingModule }      from './app-routing.module';
import { AppComponent }          from './app.component';
import { WelcomeComponent }      from './home/components/welcome/welcome.component';
import { PageNotFoundComponent } from './home/components/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    // angular modules
    BrowserModule, HttpClientModule,
    // in-memory web api module
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),
    // app routing module
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
