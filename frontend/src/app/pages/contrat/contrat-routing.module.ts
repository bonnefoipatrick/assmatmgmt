import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContratListComponent } from './contrat-list/contrat-list.component';
import { ContratDetailComponent } from './contrat-detail/contrat-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'account/list', pathMatch: 'full'},
  { path: 'account/list', component: ContratListComponent },
  { path: 'account/:accountId/view', component: ContratDetailComponent },
  { path: 'account/:accountId/edit', component: ContratDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratRoutingModule { }
