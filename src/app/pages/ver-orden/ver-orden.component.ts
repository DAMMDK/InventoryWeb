import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdenesService } from '../../services/ordenes.service';
import { DetalleOrdenes } from '../../interfaces/detalleOrden.interface';

@Component({
  selector: 'app-ver-orden',
  templateUrl: './ver-orden.component.html',
  styleUrls: ['./ver-orden.component.css']
})
export class VerOrdenComponent implements OnInit {

  constructor(private route: ActivatedRoute, public ordenesService: OrdenesService) { }

  key: string = 'DateStart';
  reverse: boolean = false;
  p: number = 1;
  cantidad: number = 0;
  cargando: boolean = true;

  orden: any;
  id: number;
  mensaje: string = '¿Esta seguro que desea realizar esta acción?';

  ngOnInit(): void {
    this.route.params.subscribe(parametros => {
      this.ordenesService.getOrder(parametros['id'])
        .subscribe((orden: DetalleOrdenes) => {
          this.id = parametros['id'];
          this.orden = orden;
        });
    });
  }

  /*  ===================
    Metodos de utileria
    =================== */

  alerta() {
    confirm(this.mensaje);
  }

  Actualizar() {
    //console.log(this.form2.value);
  }

  Eliminar() {
    //console.log(this.form2.value);
  }

  cant(cantidad: number) {
    this.cantidad = cantidad;
    console.log(this.cantidad);
  }

  // Carga de elementos
  loading() {
    setTimeout(() => {
      this.cargando = false;
    }, 500);
    this.cargando = true;
  }
}
