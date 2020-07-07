import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {APP_ROUTING} from './app.routes';

import {OrdenadoresService} from './servicios/ordenadores.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OrdenadoresComponent } from './components/ordenadores/ordenadores.component';
import { OrdenadorComponent } from './components/ordenador/ordenador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    OrdenadoresComponent,
    OrdenadorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    OrdenadoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
