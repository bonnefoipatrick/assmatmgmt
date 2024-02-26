import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxHateoasClientModule, NgxHateoasClientConfigurationService } from '@lagoshny/ngx-hateoas-client';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { SidenavComponent } from './component/sidenav/sidenav.component';
import { HomeComponent } from './component/home/home.component';
import { NavigationBarComponent } from './component/navigation-bar/navigation-bar.component';

import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

import { CurrencyFormatterDirective } from './directives/currency/currency.directive';
import { DateFormatDirective } from './directives/date/date.directive';
import { YearMonthFormatDirective } from './directives/date/yearmonth.directive';

@NgModule({
  declarations: [
    SidenavComponent,
    HomeComponent,
    NavigationBarComponent,
    DateFormatDirective,
    YearMonthFormatDirective
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NgxHateoasClientModule.forRoot(),
    RouterModule,
    ReactiveFormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [
    SidenavComponent,
    HomeComponent,
    NavigationBarComponent
  ],
  providers: [
  ],
  bootstrap: []
})
export class CoreModule {

  constructor(hateoasConfig: NgxHateoasClientConfigurationService) {
       hateoasConfig.configure({
         http: {
           rootUrl: 'http://localhost:8080'
         },
         useTypes: {
          resources: []
         },
         logs: {
          verboseLogs: true
         }
       });
     }
}
