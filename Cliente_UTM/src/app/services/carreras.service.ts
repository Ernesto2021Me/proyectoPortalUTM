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

  list_one_jefe_carrera(Codigocarrera:any){
    return this.http.post(`${environment.API_URI}/carreras/jefe_carrera`,{"Codigocarrera":Codigocarrera});
  }

  informacion_carrera(Codigocarrera:any){
    return this.http.post(`${environment.API_URI}/carreras/informacion_licenciatura`,{"Codigocarrera":Codigocarrera});
  }

  informacion_carrera_posgrado(Codigocarrera:any){
    return this.http.post(`${environment.API_URI}/carreras/informacion_posgrado`,{"Codigocarrera":Codigocarrera});
  }

  nucleo_academico(Codigocarrera:any){
    return this.http.post(`${environment.API_URI}/carreras/nucleo_academico`,{"Codigocarrera":Codigocarrera});
  }

  linea_de_generacion(Codigocarrera:any){
    return this.http.post(`${environment.API_URI}/carreras/linea_de_generacion`,{"Codigocarrera":Codigocarrera});
  }
}
