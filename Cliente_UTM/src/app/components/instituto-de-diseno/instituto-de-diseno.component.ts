import { Component, OnInit } from '@angular/core';
import { InstitutosService } from 'src/app/services/institutos.service';
import {Router} from '@angular/router'
import { Instituto } from 'src/app/models/institutos';
@Component({
  selector: 'app-instituto-de-diseno',
  templateUrl: './instituto-de-diseno.component.html',
  styleUrls: ['./instituto-de-diseno.component.css']
})
export class InstitutoDeDisenoComponent implements OnInit {
  institutos: Instituto[]=[]
  urlMapping: { [key: string]: string } = {
    'Instituto de Computación': '/home/investigacion/institutos_de_investigacion/instituto_de_computacion',
    'Instituto de Electrónica y Mecatrónica': '/home/investigacion/institutos_de_investigacion/instituto_de_electronica_y_mecatronica',
    'Instituto de Diseño': '/home/investigacion/institutos_de_investigacion/instituto_de_diseno',
    'Instituto de Física y Matemáticas': '/home/investigacion/institutos_de_investigacion/instituto_de_fisica_y_matematicas',
    'Instituto de Ciencias Sociales y Humanidades': '/home/investigacion/institutos_de_investigacion/instituto_de_ciencias_sociales_y_humanidades',
    'Instituto de Agroindustrias': '/home/investigacion/institutos_de_investigacion/instituto_de_agroindustrias',
    'Instituto de Hidrología': '/home/investigacion/institutos_de_investigacion/instituto_de_hidrologia',
    'Instituto de Minería': '/home/investigacion/institutos_de_investigacion/instituto_de_mineria',
    'Instituto de Ingeniería Industrial y Automotriz': '/home/investigacion/institutos_de_investigacion/instituto_de_ingenieria_industrial_y_automotriz',
    'Centro de Estudios de Nuevos Materiales': '/home/investigacion/institutos_de_investigacion/centro_de_estudios_de_muevos_materiales',
  
  };
  constructor(private InstitutosService: InstitutosService, private router: Router) {}

  ngOnInit(): void {
    this.loadData();
    
    
  }
  

  loadData(){
    this.loadInstitutos();
  }

  private loadInstitutos(){
    this.InstitutosService.list_institutos_investigacion( ).subscribe(
      (res: any) =>
        this.institutos = res,
      (err) => console.error(err)
    );
  }

  navigateTo(nombre_direccion: string): void {
    const url = this.urlMapping[nombre_direccion];
    if (url) {
      if (nombre_direccion === 'Licenciatura en Estudios Mexicanos' || nombre_direccion === 'Maestría en Ciencia de Datos') {
        // Redirige a una URL externa
        window.location.href = url;
      } else {
        // Redirige a una URL interna y recarga la página
        window.location.href = url;
      }
    } else {
      console.error('URL no encontrada para el nombre de carrera:', nombre_direccion);
    }
     }
}
