import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/usuario.interfaces';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  form: FormGroup;
  cargando: boolean = true;
  key: string = 'DateStart';
  reverse: boolean = false;
  p: number = 1;
  mensaje: string = '¿Esta seguro que desea realizar esta acción?';
  usuario: any;//Usuario[];

  constructor(private usuarioService: UsuarioService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
    this.getPerfil();
  }

  getPerfil() {
    this.usuarioService.perfilUsuario().subscribe(result => {
      this.usuario = result;
      this.form.controls.name.setValue(result[0].name);
      console.log(result[0].name);
      console.log(result[0]);

      setTimeout(() => {
        this.cargando = false;
      }, 500);
    });
  }

  alerta() {
    confirm(this.mensaje);
  }

  actUsr(): void {
    const dataPost = this.form.getRawValue();
    this.usuarioService.actualizarUsuarios(dataPost).subscribe(
      response => {
        if (response) {
          console.log(response);
        }
      },
      error => {
        console.log('Error');
      }
    );
  }

  // sorting
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
