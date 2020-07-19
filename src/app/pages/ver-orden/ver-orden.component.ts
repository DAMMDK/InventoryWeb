import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';
import { ActivatedRoute } from '@angular/router';
import { DetalleOrdenes } from '../../interfaces/detalleOrden.interface';

@Component({
  selector: 'app-ver-orden',
  templateUrl: './ver-orden.component.html',
  styleUrls: ['./ver-orden.component.css']
})
export class VerOrdenComponent implements OnInit {

  constructor( private route: ActivatedRoute, public ordenesService: OrdenesService) { }

  key: string = 'DateStart';
  reverse: boolean = false;
  p: number = 1;

  cargando: true;
  orden: DetalleOrdenes;
  id: number;

  ngOnInit(): void {

    this.route.params.subscribe(parametros => {
      this.ordenesService.getOrder(parametros['id'])
      .subscribe( (orden: DetalleOrdenes) => {
        this.id = parametros['id'];
        this.orden = orden;
        console.log(orden);
      });
    });
  }

  // sorting
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
}
