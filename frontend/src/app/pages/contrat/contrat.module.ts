import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './../../angular-material/angular-material.module';

import { ContratListComponent } from './contrat-list/contrat-list.component';
import { ContratDetailComponent } from './contrat-detail/contrat-detail.component';
import { ContratCreateComponent } from './contrat-create/contrat-create.component';

import { ContratRoutingModule } from './contrat-routing.module';
import { ContratService } from './services/Contrat.service';

@NgModule({
  declarations: [
    ContratListComponent,
    ContratDetailComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    ContratRoutingModule
  ],
  providers: [
    ContratService
  ]
})
export class ContratModule { }
