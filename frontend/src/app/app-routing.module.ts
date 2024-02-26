import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'contrat',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/contrat/contrat.module').then(m => m.ContratModule)
      }
    ]
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
