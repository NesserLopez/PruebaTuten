import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutenService {

  url:String = "https://dev.tuten.cl/TutenREST/rest";
  constructor(private http: HttpClient) { }

  loginUser(email: string, clave: string): Observable<any>{

      let headers = new HttpHeaders();
      headers = headers.set('Content-Type','application/json');
      headers = headers.set('password',clave);
      headers = headers.set('app','APP_BCK');
      let params = [];

      return this.http.put(this.url+'/user/' + email, params, {headers: headers});
  }


  consultarBookings()
  {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/json');
    headers = headers.set('adminemail',"testapis@tuten.cl");
    headers = headers.set('token',localStorage.getItem("token_tuten").toString() );
    headers = headers.set('app','APP_BCK');
    let params = [];

    return this.http.get(this.url+'/user/contacto@tuten.cl/bookings?current=true', {headers: headers});

  }

}
