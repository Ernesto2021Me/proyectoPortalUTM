import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CarrerasService {

  constructor(private http: HttpClient) { }
  list_licenciaturas(){
    return this.http.get(`${environment.API_URI}/carreras/licenciaturas`);
  }

  list_posgrados(){
    return this.http.get(`${environment.API_URI}/carreras/posgrados`);
  }

  list_perfil_egreso(Codigocarrera:any){
    console.log(Codigocarrera)
    return this.http.post(`${environment.API_URI}/carreras/perfil_egreso`,{"Codigocarrera":Codigocarrera});
  }
}
