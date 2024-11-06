import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.page.html',
  styleUrls: ['./modificar-perfil.page.scss'],
})
export class ModificarPerfilPage {
  // Datos del perfil
  email: string = 'fr.salinás@gmail.com';
  password: string = '***********';
  telefono: string = '+5695348524';
  userID: string = '1388491-5';
  montoEstimado: number = 36000;

  // Control de edición de campos con tipos específicos
  editables: { [key in 'email' | 'password' | 'telefono']: boolean } = {
    email: false,
    password: false,
    telefono: false
  };

  // Control para mostrar el mensaje de confirmación
  mostrarMensajeGuardado: boolean = false;

  // Control para habilitar el botón de guardar cambios
  cambiosRealizados: boolean = false;

  constructor(private router: Router) {}

  // Navegar de regreso al menú principal
  goBack() {
    this.router.navigate(['/menu-principal']);
  }

  // Alternar la capacidad de edición de un campo específico
  toggleEditable(campo: 'email' | 'password' | 'telefono') {
    this.editables[campo] = !this.editables[campo];
    this.cambiosRealizados = true;
  }

  // Guardar los cambios realizados
  guardarCambios() {
    // Validación simple (puedes mejorarla según tus necesidades)
    if (this.validarCampos()) {
      console.log('Cambios guardados:', {
        email: this.email,
        password: this.password,
        telefono: this.telefono,
      });

      // Mostrar el mensaje de confirmación
      this.mostrarMensajeGuardado = true;

      // Ocultar el mensaje después de 2 segundos
      setTimeout(() => {
        this.mostrarMensajeGuardado = false;
      }, 2000);

      // Desactivar la edición de los campos
      this.editables.email = false;
      this.editables.password = false;
      this.editables.telefono = false;

      // Resetear el control de cambios realizados
      this.cambiosRealizados = false;
    } else {
      // Aquí puedes manejar errores de validación si es necesario
      console.log('Errores de validación en los campos.');
      // Opcional: Mostrar un mensaje de error al usuario
    }
  }

  // Validar los campos antes de guardar
  validarCampos(): boolean {
    // Ejemplo de validación: asegurarse de que los campos no estén vacíos
    if (!this.email || !this.password || !this.telefono) {
      return false;
    }

    // Puedes agregar más validaciones según tus necesidades
    return true;
  }
  togglePasswordVisibility() {
    const passwordInput = document.querySelector('ion-input[type="password"]') as HTMLIonInputElement;
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  }
}

