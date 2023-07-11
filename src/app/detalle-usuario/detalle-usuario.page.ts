import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.page.html',
  styleUrls: ['./detalle-usuario.page.scss'],
})
export class DetalleUsuarioPage implements OnInit {

  usuario = {
    id: 0,
    name: "usuario",
    email: "prueba@duocuc.cl",
    password: "ejemplo1"
  };

  constructor(private usuarioserv: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.getUsuarioByID(this.getidFromURL());
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
    )
  }

}
