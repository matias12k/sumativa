import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../interface/usuario';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {

  usuario = {
    id: 0,
    name: "",
    email: "",
    password: ""
  }

  constructor(private usuarioserv: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.getUsuarioByID(this.getidFromURL())
  }

  getidFromURL() {
    let url = this.router.url;
    let arr = url.split("/", 3);
    let id = parseInt(arr[2]);
    return id;
  }

  getUsuarioByID(UsuarioID: Number) {
    this.usuarioserv.getUsuarioByID(UsuarioID).subscribe(
      (resp: any) => {
        this.usuario = {
          id: resp[0].id,
          name: resp[0].name,
          email: resp[0].email,
          password: resp[0].password
        };
      }
    );
  }

  updateusuario(){
    this.usuarioserv.actualizarusuario(this.usuario).subscribe()
    this.router.navigateByUrl('/listar-usuarios')
  }


}
