import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import localesEs from '@angular/common/locales/es-HN';
import lacaleFr from '@angular/common/locales/fr'
import {registerLocaleData} from '@angular/common';
registerLocaleData(localesEs);
registerLocaleData(lacaleFr);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:'es-HN'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
