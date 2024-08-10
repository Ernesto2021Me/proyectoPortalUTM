import { Component } from '@angular/core';
import { CarrerasService } from 'src/app/services/carreras.service';
import { Perfil } from 'src/app/models/perfiles';
import {Router} from '@angular/router'
import { Carrera } from 'src/app/models/carreras';
import { Mision } from 'src/app/models/mision';
import { Campo_accion } from 'src/app/models/campo_accion';
import { Jefe_carrera } from 'src/app/models/jefe_carreras';
import { Vision } from 'src/app/models/vision';
import { Objetivo } from 'src/app/models/objetivo';
@Component({
  selector: 'app-ingenieria-en-computacion',
  templateUrl: './ingenieria-en-computacion.component.html',
  styleUrls: ['./ingenieria-en-computacion.component.css']
})
export class IngenieriaEnComputacionComponent {
   
 licenciaturas:Carrera[]=[]
 posgrados: Carrera[]=[]
 jefe_carrera=new Jefe_carrera();
 mision: Mision=new Mision();
 vision:Vision=new Vision();
 objetivo: Objetivo=new Objetivo();
 perfil_egreso: Perfil = new Perfil();
 perfil_ingreso: Perfil = new Perfil();
campos: Campo_accion=new Campo_accion();

  panels: { title: string, content: string }[] = [];
  openIndex: number | null = null;
  constructor(private CarrerasService: CarrerasService,private router: Router) { }

  ngOnInit(): void {
    this.panels = [
      { title: 'JEFATURA DE CARRERA', content: 'Contenido del panel 1' },
      { title: 'MISIÓN', content: 'Contenido del panel 2' },
      { title: 'VISIÓN', content: 'Contenido del panel 3' },
      { title: 'OBJETIVO', content: 'Contenido del panel 4' },
      { title: 'PERFIL DE INGRESO', content: 'Contenido del panel 5' },
      { title: 'PERFIL DE EGRESO', content: 'Contenido del panel 6' },
      { title: 'CAMPO DE ACCIÓN', content: 'Contenido del panel 7' },
      { title: 'PLAN DE ESTUDIOS', content: 'Contenido del panel 8' },
  ];
  
  this.CarrerasService.list_licenciaturas( ).subscribe(
    (reslicenciaturas: any) => {
      this.licenciaturas = reslicenciaturas;
      console.log(this.licenciaturas)
    },
    (err) => console.error(err)
  );
  
  this.CarrerasService.list_posgrados( ).subscribe(
    (reslicenciaturas: any) => {
      this.posgrados = reslicenciaturas;
      console.log(this.posgrados)
    },
    (err) => console.error(err)
  );
  
  }
  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
  
  isOpen(index: number): boolean {
    return this.openIndex === index;
  }


  extraerDatos_mision(resultados: any[]): Mision {
    const mision = new Mision();
    
    if (resultados.length > 0) {
      mision.mision = resultados[0].mision || '';
      
      mision.descripcion_mision = resultados
        .map(result => result.descripcion_mision)
        .filter(desc => desc);
    }
    
    return mision;
  }

  extraerDatos_ingreso(resultados: any[]): Perfil {
    const perfil = new Perfil();
    
    if (resultados.length > 0) {
      perfil.perfil = resultados[0].perfil_ingreso || '';
      
      perfil.descripcion_conocimiento = resultados
        .map(result => result.descripcion_conocimiento_ingreso)
        .filter(desc => desc);
        
      perfil.descripcion_habilidad = resultados
        .map(result => result.descripcion_habilidad_ingreso)
        .filter(desc => desc);
        
      perfil.descripcion_valores = resultados
        .map(result => result.descripcion_valores_ingreso)
        .filter(desc => desc);
    }
    
    return perfil;
  }
  
  extraerDatos_egreso(resultados: any[]): Perfil {
    const perfil = new Perfil();
    
    if (resultados.length > 0) {
      perfil.perfil = resultados[0].perfil_egreso || '';
      
      perfil.descripcion_conocimiento = resultados
        .map(result => result.descripcion_conocimiento_egreso)
        .filter(desc => desc);
        
      perfil.descripcion_habilidad = resultados
        .map(result => result.descripcion_habilidad_egreso)
        .filter(desc => desc);
        
      perfil.descripcion_valores = resultados
        .map(result => result.descripcion_valores_egreso)
        .filter(desc => desc);
    }
    
    return perfil;
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

  navigateTo(nombre_direccion: string): void {
    const url = this.urlMapping[nombre_direccion];
    if (url) {
      if (nombre_direccion === 'Licenciatura en Estudios Mexicanos' || nombre_direccion === 'Maestría en Ciencia de Datos'){
        // Redirige a una URL externa
       // window.location.href = url;
       window.open(url, '_blank');
      } else {
        // Redirige a una URL interna
        this.router.navigate([url]);
      }
    } else {
      console.error('URL no encontrada para el nombre de carrera:', nombre_direccion);
    }
  // Método para manejar la apertura y cierre de los paneles del acordeón
  
}
