import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteConsumoPage } from './reporte-consumo.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteConsumoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteConsumoPageRoutingModule {}
