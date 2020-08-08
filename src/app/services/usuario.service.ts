import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../interfaces/usuarios.interfaces';
import { Usuario } from '../interfaces/usuario.interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  cargando = true;
  usuarios: Usuarios[] = [];
  usuario: Usuario[] = [];
  id = 2;

  constructor(private http: HttpClient) {
    this.cargarUsuarios();
    this.perfilUsuario();
  }

  public cargarUsuarios() {

    this.http.get('https://localhost:44308/api/security/findusr')
      .subscribe((resp: Usuarios[]) => {
        this.usuarios = resp;

        setTimeout(() => {
          this.cargando = false;
        }, 500);
      });
  }

  public perfilUsuario() {
    return this.http.get<any>(`https://localhost:44308/api/security/findusr/${this.id}`)
      .pipe(
        map(
          usuario => {
            return usuario;
          }
        )
      );
  }

  public findAll() {
    return this.http.get<any>(`https://localhost:44308/api/security/findusr/${this.id}`)
      .pipe(
        map(
          result => {
            return result;
          }
        )
      );
  }

  public actualizarUsuarios(formData) {
    return this.http.put<any>('https://localhost:44308/api/security/updusr',
      formData)
      .pipe(
        map(
          data => {
            return data;
          }
        )
      );
  }

  public eliminarUsuarios() {

    this.http.get('https://localhost:44308/api/security/findusr')
      .subscribe((resp: Usuarios[]) => {
        this.usuarios = resp;

        setTimeout(() => {
          this.cargando = false;
        }, 500);
      });
  }

  public getUser(id: number) {
    return this.http.get(`https://localhost:44308/api/security/findusr/${id}`);
  }

}
