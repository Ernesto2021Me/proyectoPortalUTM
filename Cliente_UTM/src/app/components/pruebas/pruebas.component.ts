// pruebas.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarrerasService } from 'src/app/services/carreras.service';
import { Instituto } from 'src/app/models/institutos';
import { InstitutosService } from 'src/app/services/institutos.service';

import {Router} from '@angular/router'
import { Carrera } from 'src/app/models/carreras';
import { Campo_accion } from 'src/app/models/campo_accion';
@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {
  
 licenciaturas:Carrera[]=[]
 posgrados: Carrera[]=[]
 institutos: Instituto[]=[]

campos: Campo_accion=new Campo_accion();
 panels: { title: string, content: string }[] = [];
  openIndex: number | null = null;
  
 
  constructor(private CarrerasService: CarrerasService,private router: Router,private InstitutosService: InstitutosService) {
    
  }

  ngOnInit(): void {
   
  }
  
  
  
  extraerDatos_campo(resultados: any[]): Campo_accion {
    const campo = new Campo_accion();
    
    if (resultados.length > 0) {
      campo.campo = resultados[0].campo_accion || '';
      
      campo.descripcion_campo_accion = resultados
        .map(result => result.descripcion_campo_accion)
        .filter(desc => desc);
    }
    
    return campo;
  }

  
    

  
}
