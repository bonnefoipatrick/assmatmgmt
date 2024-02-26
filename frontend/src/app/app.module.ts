import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { ContratModule } from './pages/contrat/contrat.module';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    ContratModule
  ],
  providers: [
  {
   provide: LOCALE_ID,
   useValue: 'fr-FR' // 'de' for Germany, 'fr' for France ...
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
