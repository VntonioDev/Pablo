import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosHistoricosAdminPage } from './datos-historicos-admin.page';

const routes: Routes = [
  {
    path: '',
    component: DatosHistoricosAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosHistoricosAdminPageRoutingModule {}
