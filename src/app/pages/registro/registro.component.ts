import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  registro() {
    console.log(this.email);
    console.log(this.password);
  }

}
