import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {
  limite: number = 0.01;
  diaActual: string = '';
  showToast: boolean = false; // Controlador para mostrar el toast
  toastMessage: string = '';
  
  constructor(private router: Router, private menuController: MenuController) {}

  ngOnInit() {
    this.obtenerDiaActual();
  }

  obtenerDiaActual() {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const fechaActual = new Date();
    const dia = fechaActual.getDay(); // Obtiene el índice del día actual
    this.diaActual = diasSemana[dia]; // Asigna el día de la semana correspondiente
  }

  openUserMenu() {
    this.menuController.enable(true, 'userMenu');
    this.menuController.open('userMenu').then(() => {
      // Buscar el ion-backdrop y cambiar aria-hidden
      setTimeout(() => {
        const backdrop = document.querySelector('ion-backdrop');
        if (backdrop) {
          backdrop.setAttribute('aria-hidden', 'false');
        }
      }, 100); // Ajusta el tiempo según sea necesario
    });
  }

  modificarPerfil() {
    this.router.navigate(['/modificar-perfil']);  // Navega a la página de modificar perfil
  }

  // Función para ver notificaciones
  notificaciones() {
    console.log('Ver notificaciones');
  }

  // Función para sugerencias de ahorro
  sugerenciasDeAhorro() {
    console.log('Sugerencias de ahorro');
  }

  // Función para cerrar sesión
  cerrarSesion() {
    // Eliminar token y email del localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('email');

    // Redirigir al login
    this.router.navigate(['/login']).then(() => {
      this.mostrarToast('Sesión cerrada exitosamente'); // Mostrar mensaje de retroalimentación
    this.router.navigate(['/login']);
    });
  }

  mostrarToast(mensaje: string) {
    this.toastMessage = mensaje; // Asigna el mensaje al toast
    this.showToast = true; // Muestra el toast
  }
  // Función para disminuir el límite
  decrease() {
    if (this.limite > 0.01) {
      this.limite = parseFloat((this.limite - 0.01).toFixed(2));
    }
  }

  // Función para aumentar el límite
  increase() {
    this.limite = parseFloat((this.limite + 0.01).toFixed(2));
  }

  // Función de navegación para el botón del menú principal
  goToMenu() {
    this.router.navigate(['/menu']);
  }

  // Actualiza el límite con la entrada del usuario
  updateLimit(event: any) {
    const value = parseFloat(event.target.value);
    if (value >= 0.01) {
      this.limite = value;
    } else {
      this.limite = 0.01; // Restablecer al valor mínimo
    }
  }
}
