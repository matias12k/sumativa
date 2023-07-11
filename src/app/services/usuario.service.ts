import { Injectable } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AgregarUsuario } from '../interface/agregar-usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.apiURL}/usuarios`)
  }

  crearUsuario(newUsuario: AgregarUsuario): Observable<AgregarUsuario> {
    return this.http.post<Usuario>(`${environment.apiURL}/usuarios`, newUsuario)
  }

  getUsuarioByID(id:Number): Observable<Usuario>{
    return this.http.get<Usuario>(`${environment.apiURL}/usuarios/?id=${id}`)
  }
  
  actualizarusuario(usuario: any): Observable<Usuario> {
    return this.http.put<Usuario>(`${environment.apiURL}/usuarios/${usuario.id}`, usuario)
  }
  
  eiliminarUsuarioByID(usuario: any): Observable<Usuario>{
    return this.http.delete<Usuario>(`${environment.apiURL}/usuarios/${usuario.id}`)
  }
}
