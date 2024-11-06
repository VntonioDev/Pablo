import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumoTardePageRoutingModule } from './consumo-tarde-routing.module';

import { ConsumoTardePage } from './consumo-tarde.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumoTardePageRoutingModule
  ],
  declarations: [ConsumoTardePage]
})
export class ConsumoTardePageModule {}
