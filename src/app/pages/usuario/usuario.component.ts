import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  // Formularios
  form: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  // Carga de datos
  cargando: boolean = true;
  // Orden de tabla
  key: string = 'DateStart';
  p: 1;
  reverse: boolean = false;
  // Otros
  mensaje: string ='¿Esta seguro que desea realizar esta acción?';
  users: any;

  constructor(private usuarioService: UsuarioService, private fb: FormBuilder) { }
  ngOnInit(): void {

    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      age: [''],
      birtday: ['', Validators.required],
      idRole: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      dateStart: [''],
      dateUpdate: [''],
      pwd: ['', [Validators.minLength(8), Validators.maxLength(15), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    });

    this.form2 = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      birtday: ['', Validators.required],
      idRole: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      pwd: ['', [Validators.minLength(8), Validators.maxLength(15), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    });

    this.form3 = this.fb.group({
      userId: ['', Validators.required],
      email: ['', Validators.required],
      status: ['', Validators.required]
    });

    this.getPerfil();
    this.getUsuarios();
  }

  getPerfil() {

    this.usuarioService.perfilUsuario().subscribe(result => {
      this.form.controls.name.setValue(result[0].name);
      this.form.controls.age.setValue(result[0].age);
      this.form.controls.birtday.setValue(formatDate(result[0].birtday, 'yyyy-MM-dd', 'en'));
      this.form.controls.idRole.setValue(result[0].idRole);
      this.form.controls.email.setValue(result[0].email);
      this.form.controls.dateStart.setValue(result[0].dateStart);
      this.form.controls.dateUpdate.setValue(result[0].dateUpdate);
      console.log(result[0]);

      this.loading();
    });
  }

  putPerfil() {
    console.log(this.form2.value);
  }

  postUsuario() {
    console.log(this.form2.value);
  }

  deleteUsr(){
    console.log(this.form3.value);
  }

  getUsuarios(){
    this.usuarioService.cargarUsuarios().subscribe(result => {
      this.users = result;
    });
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

  /*  ===================
      Metodos de utileria
      =================== */

  alerta() {
    confirm(this.mensaje);
  }

  // Carga de elementos
  loading() {
    setTimeout(() => {
      this.cargando = false;
    }, 500);
    this.cargando = true;
  }

  // Orden de tabla
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
