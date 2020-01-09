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
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { MovieComponentComponent } from './components/movie-component/movie-component.component';
import {FormsModule}   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NgForNgIfComponent,
    Es6Component,
    MainComponent,
    MoviesExampleComponent,
    ShowCardComponent,
    OmdbComponent,
    BootstrapComponent,
    MovieCardComponent,
    AComponent,
    BComponent,
    MovieComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
