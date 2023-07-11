import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  posts: any[] = [
    { title: '', description: 'Descripción de la publicación 1', image: 'assets/images/spdigital.webp', likes: 0, comments: 0 },
    { title: 'Publicación 2', description: 'Descripción de la publicación 2', image: 'assets/images/THE-BAT.jpg', likes: 0, comments: 0 },
    { title: 'Publicación 3', description: 'Descripción de la publicación 3', image: 'assets/images/Vn8jOZhaE_2000x1500__1.webp', likes: 0, comments: 0 }
  ];

  constructor(private router: Router, private menuCtrl: MenuController) {}

  likePost(post: any) {
    post.likes++;
  }

  commentPost(post: any) {
    post.comments++;
  }

  goToProfile() {
    this.menuCtrl.close(); // Cierra el menú antes de navegar a la página de perfil
    this.router.navigate(['/profile']);
  }

  goToConfiguracion() {
    this.menuCtrl.close(); // Cierra el menú antes de navegar a la página de configuración
    this.router.navigate(['/configuracion']);
  }
  
  goToListarUsuarios() {
    this.router.navigate(['/listar-usuarios']);
  }
  
  openMenu() {
    this.menuCtrl.open(); // Abre el menú lateral
  }

  
}
