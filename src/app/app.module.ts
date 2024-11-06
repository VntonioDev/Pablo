import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()), 
    ScreenTrackingService, UserTrackingService, 
    provideFirestore(() => getFirestore()), 
    provideStorage(() => getStorage())],
  bootstrap: [AppComponent],
})
export class AppModule {}

export interface UserI{
  numeroTelefono:string;
  apellido:string;
  email:string;
  nombre:string;
  password:string;
  user_id:string;
  estado:string;
  limiteRef:string; /*este es una ruta que hace referencia a otra coleccion en mi firestore database*/
  notificacionRef:string; /*este es una ruta que hace referencia a otra coleccion en mi firestore database*/
}
