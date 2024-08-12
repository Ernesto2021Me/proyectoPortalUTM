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

  list_one_campo(Codigocarrera:any){
    return this.http.post(`${environment.API_URI}/carreras/campo`,{"Codigocarrera":Codigocarrera});
  }
  
  list_one_mision(Codigocarrera:any){
    return this.http.post(`${environment.API_URI}/carreras/mision`,{"Codigocarrera":Codigocarrera});
  }

  list_one_vision(Codigocarrera:any){
    return this.http.post(`${environment.API_URI}/carreras/vision`,{"Codigocarrera":Codigocarrera});
  }

  list_one_objetivo(Codigocarrera:any){
    return this.http.post(`${environment.API_URI}/carreras/objetivo`,{"Codigocarrera":Codigocarrera});
  }

  list_perfil_egreso(Codigocarrera:any){
    return this.http.post(`${environment.API_URI}/carreras/egreso`,{"Codigocarrera":Codigocarrera});
  }

  list_perfil_ingreso(Codigocarrera:any){
    return this.http.post(`${environment.API_URI}/carreras/ingreso`,{"Codigocarrera":Codigocarrera});
  }

  list_perfil_campo(Codigocarrera:any){
    return this.http.post(`${environment.API_URI}/carreras/campo`,{"Codigocarrera":Codigocarrera});
  }

  informacion_carrera(Codigocarrera:any){
    return this.http.post(`${environment.API_URI}/carreras/campo`,{"Codigocarrera":Codigocarrera});
  }
}
