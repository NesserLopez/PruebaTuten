import { Component, OnInit } from '@angular/core';
import { TutenService } from './../../Servicios/tuten.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  email:string = "testapis@tuten.cl";
  clave:string = "1234";

  constructor(private service: TutenService,private router: Router) { }

  ngOnInit() {
  }

  login()
  {
    this.service.loginUser(this.email,this.clave).subscribe(
      result => {
        localStorage.setItem("token_tuten",result.sessionTokenBck);
        localStorage.setItem("email",this.email);
        this.router.navigate(['/booking'])
      },
      error => {
          console.log(<any>error);
      }
  );

  }

}
