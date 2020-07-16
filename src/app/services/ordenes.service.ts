import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ordenes } from '../interfaces/ordenes.interfaces';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

cargando = true;
ordenes: Ordenes[] = [];

  constructor( private http: HttpClient ) {
    this.cargarOrdenes();
  }

  private cargarOrdenes() {

    return new Promise( ( resolve, rejects ) => {

      this.http.get('https://localhost:44308/api/orders/find')
      .subscribe( (resp: Ordenes[]) => {
        this.ordenes = resp;

        console.log(resp);

        setTimeout(() => {
          this.cargando = false;
        }, 500);
        resolve();
      });

    });
  }
}
