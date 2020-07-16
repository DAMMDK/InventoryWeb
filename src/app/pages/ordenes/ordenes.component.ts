import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})

export class OrdenesComponent implements OnInit {

  constructor( public ordenesService: OrdenesService) { }
  ngOnInit(): void {
  }

  key: string = 'DateStart';
  reverse: boolean = false;
  p: number = 1;

  // sorting
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
}
