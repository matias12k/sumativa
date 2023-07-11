import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController, MenuController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.page.html',
  styleUrls: ['./listar-usuarios.page.scss'],
})
export class ListarUsuariosPage implements OnInit {

  usuarios: any[] = [];
  router: any;

  constructor(private usuariosSer:UsuarioService, private LoadingCtrL:LoadingController ,  private menuCtrl: MenuController) { }

  ionViewWillEnter() {
    this.loadUsuarios();
  }
  ngOnInit() {
  }

  async loadUsuarios(event?: InfiniteScrollCustomEvent){
    const loading = await this.LoadingCtrL.create({
      message: "cargando...",
      spinner:"bubbles"
    }
    );
    await loading.present();

    this.usuariosSer.listarUsuarios().subscribe(
      (resp) => {
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.usuarios = JSON.parse(listString)
        event?.target.complete();
      },
      (err) => {
        console.log(err.message)
        loading.dismiss();

      }
    )

  }
  goToProfile() {
    this.menuCtrl.close(); // Cierra el menú antes de navegar a la página de perfil
    this.router.navigate(['/profile']);}
  
  goToConfiguracion() {
    this.menuCtrl.close(); // Cierra el menú antes de navegar a la página de configuración
    this.router.navigate(['/configuracion']);
  }
}

