import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumoTardePage } from './consumo-tarde.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumoTardePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumoTardePageRoutingModule {}
