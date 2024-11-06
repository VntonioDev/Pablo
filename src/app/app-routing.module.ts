import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';; // Usa "AuthGuard" en lugar de "authGuard"
// Importa el guard

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [authGuard] // <------- // Ruta protegida

  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./registrarse/registrarse.module').then(m => m.RegistrarsePageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then(m => m.PasswordPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('./menu-principal/menu-principal.module').then(m => m.MenuPrincipalPageModule),
    canActivate: [authGuard] // Protege la ruta
  },
  {
    path: 'modificar-perfil',
    loadChildren: () => import('./modificar-perfil/modificar-perfil.module').then(m => m.ModificarPerfilPageModule),
    canActivate: [authGuard] // Protege la ruta
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'sugerencias',
    loadChildren: () => import('./sugerencias/sugerencias.module').then( m => m.SugerenciasPageModule)
  },
  {
    path: 'reporte-consumo',
    loadChildren: () => import('./reporte-consumo/reporte-consumo.module').then( m => m.ReporteConsumoPageModule)
  },
  {
    path: 'historial-consumo',
    loadChildren: () => import('./historial-consumo/historial-consumo.module').then( m => m.HistorialConsumoPageModule)
  },
  {
    path: 'consumo-manana',
    loadChildren: () => import('./consumo-manana/consumo-manana.module').then( m => m.ConsumoMananaPageModule)
  },
  {
    path: 'consumo-tarde',
    loadChildren: () => import('./consumo-tarde/consumo-tarde.module').then( m => m.ConsumoTardePageModule)
  },
  {
    path: 'menu-admin',
    loadChildren: () => import('./menu-admin/menu-admin.module').then( m => m.MenuAdminPageModule)
  },
  {
    path: 'analisis',
    loadChildren: () => import('./analisis/analisis.module').then( m => m.AnalisisPageModule)
  },
  {
    path: 'datos-historicos-admin',
    loadChildren: () => import('./datos-historicos-admin/datos-historicos-admin.module').then( m => m.DatosHistoricosAdminPageModule)
  },
  {
    path: 'acciones-usuarios',
    loadChildren: () => import('./acciones-usuarios/acciones-usuarios.module').then( m => m.AccionesUsuariosPageModule)
  },
  {
    path: 'gestion-usuarios',
    loadChildren: () => import('./gestion-usuarios/gestion-usuarios.module').then( m => m.GestionUsuariosPageModule)
  },
  {
    path: '**', 
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
