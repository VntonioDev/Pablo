import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialConsumoPage } from './historial-consumo.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialConsumoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialConsumoPageRoutingModule {}
