import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { InstitutosService } from 'src/app/services/institutos.service';
import {Router} from '@angular/router'
import { Instituto_informacion_general } from 'src/app/models/Informacion_general_institutos';
import { Instituto } from 'src/app/models/institutos';
@Component({
  selector: 'app-instituto-de-computacion',
  templateUrl: './instituto-de-computacion.component.html',
  styleUrls: ['./instituto-de-computacion.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InstitutoDeComputacionComponent implements OnInit {
  institutos: Instituto[]=[]
  instituto_informacion=new Instituto_informacion_general();
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
    this.loadInstitutos_informacion();
  }

  private loadInstitutos(){
    this.InstitutosService.list_institutos_investigacion( ).subscribe(
      (res: any) =>
        this.institutos= res,
      (err) => console.error(err)
    );
  }

  private loadInstitutos_informacion(){
    this.InstitutosService.informacion_general_instituto('002' ).subscribe(
      (res: any) =>
        this.instituto_informacion= res[0],
      (err) => console.error(err)
    );
  }

  navigateTo(nombre_direccion: string): void {
    const url = this.urlMapping[nombre_direccion];
    if (url) {
      if (nombre_direccion === 'Licenciatura en Estudios Mexicanos' || nombre_direccion === 'Maestría en Ciencia de Datos') {
        window.location.href = url;
      } else {
        window.location.href = url;
      }
    } else {
      console.error('URL no encontrada para el nombre de carrera:', nombre_direccion);
    }
     }
     
     formatText(text: string): string {
      return text.split('\n').map(line => line.trim()).filter(line => line.length > 0).map(paragraph => `<p>${paragraph}</p>`).join('');
    }

    formatText_2(text: string): string {
      const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
      if (lines.length === 0) return '';
      const firstParagraph = `<p>${lines[0]}</p>`;
      const isHeader = (line: string) => {
        return line === "Investigación básica y aplicada:" || line === "Promoción del Desarrollo y difusión de la cultura:";
      };
      let html = '';
      let currentListItems: string[] = [];

      for (const line of lines.slice(1)) {
        if (isHeader(line)) {
          
          if (currentListItems.length > 0) {
            html += `<ul class="reduce-spacing">${currentListItems.join('')}</ul>`;
            currentListItems = []; 
          }
        
          html += `<li class="list"><strong>${line}</strong></li>`;
        } else {
          currentListItems.push(`<li>${line}</li>`);
        }
      }
    
      if (currentListItems.length > 0) {
        html += `<ul class="reduce-spacing">${currentListItems.join('')}</ul>`;
      }
      return firstParagraph + '<ul>' + html + '</ul>';
    }
}
