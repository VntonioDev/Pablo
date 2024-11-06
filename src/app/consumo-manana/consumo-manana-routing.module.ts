import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumoMananaPage } from './consumo-manana.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumoMananaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumoMananaPageRoutingModule {}
