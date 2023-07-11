import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {

  usuario = {
    id: 0,
    name: "",
    email: "",
    password: ""
  }

  constructor(private router: Router, private usuarioserv: UsuarioService ) { }

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
    )
  }



  eliminarusuario(){
    this.usuarioserv.eiliminarUsuarioByID(this.usuario).subscribe()
    this.router.navigateByUrl("listar-usuarios")
  }
}
