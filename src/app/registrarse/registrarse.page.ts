import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirestoreService } from '../common/services/firestore.service';
import { UserI } from 'src/app/app.module';
import { v4 as uuidv4 } from 'uuid'; 
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage {
  numeroTelefono: string = ''; // Aquí el número sin el prefijo +56
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private navCtrl: NavController, private firestoreService: FirestoreService) {}

  capitalizeInitials(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

  onFirstNameChange() {
    this.firstName = this.capitalizeInitials(this.firstName);
  }

  onLastNameChange() {
    this.lastName = this.capitalizeInitials(this.lastName);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  validateEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com|yahoo\.com)$/;
    return emailRegex.test(this.email);
  }

  validatePhoneNumber() {
    const phoneRegex = /^9\d{8}$/; // Validación de número
    return phoneRegex.test(this.numeroTelefono);
  }

  async register() {
    if (!this.firstName || !this.lastName || !this.email || !this.password || !this.confirmPassword || !this.numeroTelefono) {
      this.showErrorMessage('Por favor, completa todos los campos.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.showErrorMessage('Las contraseñas no coinciden');
      return;
    }

    if (!this.validateEmail()) {
      this.showErrorMessage('El correo debe ser de un dominio permitido: @gmail.com, @hotmail.com, @outlook.com o @yahoo.com');
      return;
    }

    const fullPhoneNumber = `+56${this.numeroTelefono}`;
    if (!this.validatePhoneNumber()) {
      this.showErrorMessage('El número de teléfono debe empezar con 9, tener 9 dígitos y contener solo números');
      return;
    }

    try {
      const existingEmail = await firstValueFrom(this.firestoreService.getUserByEmail(this.email));
      const existingPhoneNumber = await firstValueFrom(this.firestoreService.getUserByPhoneNumber(fullPhoneNumber));

      if (existingEmail.length > 0) {
        this.showErrorMessage('El correo ya está registrado');
        return;
      }

      if (existingPhoneNumber.length > 0) {
        this.showErrorMessage('El número de teléfono ya está registrado');
        return;
      }

      this.isLoading = true;

      const newUser: UserI = {
        numeroTelefono: fullPhoneNumber,
        apellido: this.lastName,
        email: this.email,
        nombre: this.firstName,
        password: this.password,
        user_id: uuidv4(),
        estado: 'inactivo',
        limiteRef: '/Configuracion de Limites/bpNQWldsINIB468Wfe65',
        notificacionRef: '/notificaciones/r23eeaBmCHk8gm1QvusH'
      };

      await this.firestoreService.registerUser(newUser);
      this.isLoading = false;
      this.showSuccessMessage('Registro exitoso');
      this.navCtrl.navigateForward('/login');
    } catch (error) {
      console.error('Error al registrar:', error);
      this.isLoading = false;
      this.showErrorMessage('Hubo un error al registrar. Intenta nuevamente.');
    }
  }

  showErrorMessage(message: string) {
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = '';
    }, 3000);
  }

  showSuccessMessage(message: string) {
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = '';
    }, 3000);
  }

  goLogin() {
    this.navCtrl.navigateForward('/login');
  }
}
