import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interfaces';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styleUrls: ['./ver-usuario.component.css']
})
export class VerUsuarioComponent implements OnInit {

  constructor(private route: ActivatedRoute, public usuarioService: UsuarioService) { }

  cargando: true;
  usuario: Usuario;
  id: number;

  ngOnInit(): void {
    this.route.params.subscribe(parametros => {
      this.usuarioService.getUser(parametros['id'])
      .subscribe( (usuario: Usuario) => {
        this.id = parametros['id'];
        this.usuario = usuario;
      });
    });
  }
}
