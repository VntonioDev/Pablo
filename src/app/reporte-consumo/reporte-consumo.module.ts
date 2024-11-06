import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteConsumoPageRoutingModule } from './reporte-consumo-routing.module';

import { ReporteConsumoPage } from './reporte-consumo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteConsumoPageRoutingModule
  ],
  declarations: [ReporteConsumoPage]
})
export class ReporteConsumoPageModule {}
