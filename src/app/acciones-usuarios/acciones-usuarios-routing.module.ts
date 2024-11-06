import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccionesUsuariosPage } from './acciones-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: AccionesUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccionesUsuariosPageRoutingModule {}
