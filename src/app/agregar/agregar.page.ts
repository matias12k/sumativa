import { Component, OnInit } from '@angular/core';
import { AgregarUsuario } from '../interface/agregar-usuario';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  newUsuario: AgregarUsuario = {
    name: "usuarionuevo",
    email: "prueba@duocuc.cl",
    password: "ejemplo1"
  };

  constructor(
    private usuarioserv: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  crearUsuario(){
    this.usuarioserv.crearUsuario(this.newUsuario).subscribe()
    this.router.navigateByUrl('listar-usuarios')
  }
}
