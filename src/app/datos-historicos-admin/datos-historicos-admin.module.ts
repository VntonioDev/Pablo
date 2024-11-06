import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosHistoricosAdminPageRoutingModule } from './datos-historicos-admin-routing.module';

import { DatosHistoricosAdminPage } from './datos-historicos-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosHistoricosAdminPageRoutingModule
  ],
  declarations: [DatosHistoricosAdminPage]
})
export class DatosHistoricosAdminPageModule {}
