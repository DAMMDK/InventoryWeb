import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  email: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.email);
    console.log(this.password);
  }

}
