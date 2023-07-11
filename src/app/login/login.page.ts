import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email?: string;
  password?: string;

  constructor(private router: Router, private loadingController: LoadingController) { }

  ngOnInit() {
  }

  async login() {
    // Mostrar el indicador de carga antes de iniciar sesión
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      translucent: true,
      spinner: 'circles'
    });
    await loading.present();

    // Aquí puedes implementar la lógica para iniciar sesión utilizando los valores de email y password
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Por ahora, solo imprimiré los valores en la consola como ejemplo

    // Simulación de tiempo de inicio de sesión (3 segundos)
    setTimeout(() => {
      // Ocultar el indicador de carga después de iniciar sesión
      loading.dismiss();

      // Redirigir a otra página después de iniciar sesión (por ejemplo, la página principal)
      this.router.navigate(['/home']); // Reemplaza 'home' con la ruta real de tu página principal
    }, 3000);
  }

  goToRegister() {
    // Implementa la lógica para redirigir a la página de registro
    this.router.navigate(['/registro']); // Reemplaza 'registro' con la ruta real de tu página de registro
  }
}
