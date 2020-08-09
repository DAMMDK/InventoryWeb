import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})

export class OrdenesComponent implements OnInit {

  key: string = 'DateStart';
  reverse: boolean = false;
  p: number = 1;
  cargando: boolean = true;
  ordenesComponent: any;

  constructor( public ordenesService: OrdenesService) { }
  ngOnInit(): void {
    this.getOrdenes();
  }

  getOrdenes(){
    this.ordenesService.cargarOrdenes().subscribe(result => {
      this.ordenesComponent = result;
    });
    this.loading();
  }

  /*  ===================
      Metodos de utileria
      =================== */

  // Carga de elementos
  loading() {
    setTimeout(() => {
      this.cargando = false;
    }, 500);
    this.cargando = true;
  }

  // Orden de tabla
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
}
