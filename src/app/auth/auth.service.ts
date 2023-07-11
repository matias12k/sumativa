import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  register(formData: any): Observable<any> {
    // Lógica de registro aquí
    return of({ success: true }); // Ejemplo: devuelve un Observable de éxito
  }
}
