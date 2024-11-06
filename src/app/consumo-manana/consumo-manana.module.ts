import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumoMananaPageRoutingModule } from './consumo-manana-routing.module';

import { ConsumoMananaPage } from './consumo-manana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumoMananaPageRoutingModule
  ],
  declarations: [ConsumoMananaPage]
})
export class ConsumoMananaPageModule {}
