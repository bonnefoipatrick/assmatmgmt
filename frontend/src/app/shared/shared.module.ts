import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './../angular-material/angular-material.module';

import { ShSelectComponent } from './sh-select/sh-select.component';
import { ShTextInputComponent } from './sh-text-input/sh-text-input.component';
import { ShNumberInputComponent } from './sh-number-input/sh-number-input.component';
import { ShDateInputComponent } from './sh-date-input/sh-date-input.component';
import { ErrorMessagesPipe } from './pipes/error-messages.pipe';


@NgModule({
  declarations: [
    ShSelectComponent,
    ShTextInputComponent,
    ShNumberInputComponent,
    ShDateInputComponent,
    ErrorMessagesPipe
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
