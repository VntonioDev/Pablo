import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirestoreService } from '../common/services/firestore.service';
import { UserI } from 'src/app/app.module';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  isLoading: boolean = false;
  mensaje: string = '';

  constructor(
    private navCtrl: NavController,
    private firestoreService: FirestoreService,
    private toastController: ToastController
  ) {}

  login() {
    if (this.email && this.password) {
      this.isLoading = true; // Activar el estado de carga
      setTimeout(() => { // Simulando tiempo de carga
        this.firestoreService.getUserByEmail(this.email).subscribe(async (users) => {
          const user = users.find((u) => u.password === this.password);

          this.isLoading = false; // Desactivar el estado de carga después de la respuesta

          if (user) {
            const token = this.generateCustomToken(user);
            localStorage.setItem('token', token); // Guardamos el token
            localStorage.setItem('email', this.email); // Guardamos el email en el localStorage
            console.log('Token guardado en localStorage:', token);
            console.log('Email guardado en localStorage:', this.email);

            // Verificar si user.user_id es correcto
            console.log('User ID:', user.user_id);

            // Activar el usuario
            await this.firestoreService.updateUserStatus(user.user_id, 'activo'); // Cambia el estado a activo
            this.navCtrl.navigateForward('/home');
          } else {
            alert('Correo o contraseña incorrectos.');
          }
        });
      }, 1500); 
    } else {
      alert('Por favor ingresa ambos campos.');
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  generateCustomToken(user: UserI): string {
    return btoa(user.email + ':' + new Date().toISOString()); 
  }

  irARegistro() {
    this.navCtrl.navigateForward('/register'); 
  }

  ngOnInit() {
    this.mostrarMensajeLogout();
  }
  async mostrarMensajeLogout() {
    const mensaje = localStorage.getItem('logoutMessage');
    if (mensaje) {
      const toast = await this.toastController.create({
        message: mensaje,
        duration: 3000,
        position: 'top',
        color: 'success',
      });
      await toast.present();

      // Limpiar el mensaje del localStorage después de mostrarlo
      localStorage.removeItem('logoutMessage');
    }
  }
}
