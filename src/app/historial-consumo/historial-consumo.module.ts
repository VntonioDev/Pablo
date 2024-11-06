import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialConsumoPageRoutingModule } from './historial-consumo-routing.module';

import { HistorialConsumoPage } from './historial-consumo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialConsumoPageRoutingModule
  ],
  declarations: [HistorialConsumoPage]
})
export class HistorialConsumoPageModule {}
