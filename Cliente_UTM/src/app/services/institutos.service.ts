import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class InstitutosService {

  constructor(private http: HttpClient) { }
  list_institutos_investigacion(){
    return this.http.get(`${environment.API_URI}/institutos/investigacion`);
  }

}
