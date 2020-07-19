import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetalleOrdenes } from '../interfaces/detalleOrden.interface';
import { OrdenesService } from './ordenes.service';

@Injectable({
  providedIn: 'root'
})
export class DetalleOrdenesService {

  cargando = true;
  detalleOrdenes: DetalleOrdenes[] = [];
  idTransaction: OrdenesService[] = ['id'];

  constructor( private http: HttpClient) { }
}
