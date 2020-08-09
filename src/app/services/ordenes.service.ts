import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor( private http: HttpClient ) {
    this.cargarOrdenes();
  }

  public cargarOrdenes() {
    return  this.http.get<any>('https://localhost:44308/api/orders/find')
      .pipe(
        map(
          ordenes => {
            return ordenes;
          }
        )
      );
  }

  public getOrder(id: number){
    return this.http.get<any>(`https://localhost:44308/api/orders/find/${ id }`)
    .pipe(
      map(
        orden => {
          return orden;
        }
      )
    )
  }

}
