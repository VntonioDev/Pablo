import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccionesUsuariosPageRoutingModule } from './acciones-usuarios-routing.module';

import { AccionesUsuariosPage } from './acciones-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccionesUsuariosPageRoutingModule
  ],
  declarations: [AccionesUsuariosPage]
})
export class AccionesUsuariosPageModule {}
