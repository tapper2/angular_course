import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgForNgIfComponent } from './components/ng-for-ng-if/ng-for-ng-if.component';
import { Es6Component } from './components/es6/es6.component';
import { MainComponent } from './components/main/main.component';
import { MoviesExampleComponent } from './components/movies-example/movies-example.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { OmdbComponent } from './components/omdb/omdb.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    AppComponent,
    NgForNgIfComponent,
    Es6Component,
    MainComponent,
    MoviesExampleComponent,
    ShowCardComponent,
    OmdbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
