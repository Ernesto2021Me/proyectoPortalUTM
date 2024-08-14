import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { InstitutosService } from 'src/app/services/institutos.service';
import {Router} from '@angular/router'
import { Instituto } from 'src/app/models/institutos';
import { Instituto_informacion_general } from 'src/app/models/Informacion_general_institutos';
@Component({
  selector: 'app-instituto-de-diseno',
  templateUrl: './instituto-de-diseno.component.html',
  styleUrls: ['./instituto-de-diseno.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InstitutoDeDisenoComponent implements OnInit {
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
    this.InstitutosService.informacion_general_instituto('003' ).subscribe(
      (res: any) =>
        this.instituto_informacion= res[0],
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
        window.location.href = url;
      }
    } else {
      console.error('URL no encontrada para el nombre de carrera:', nombre_direccion);
    }
     }

     formatTextAsList(text: string): string {
      let lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
      let listItems = lines.map(line => `<li>${line}</li>`).join('');
      return `<ul class="reduce-spacing">${listItems}</ul>`;
    }
  
    formatTextAsList_2(text: string): string {
      let lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
      
      if (lines.length > 0) {
        let firstParagraph = `<p>${lines[0]}</p>`;
        let listItems = lines.slice(1).map(line => `<li>${line}</li>`).join('');
        let list = `<ul class="reduce-spacing">${listItems}</ul>`;
        return `${firstParagraph}${list}`;
      }
      
      return '';
    }
    formatText(text: string): string {
      return text.split('\n').map(line => line.trim()).filter(line => line.length > 0).map(paragraph => `<p>${paragraph}</p>`).join('');
    }

    
    formatText_2(text: string): string {
      // Divide el texto en líneas y elimina espacios en blanco
      const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    
      // Si no hay líneas, devuelve una cadena vacía
      if (lines.length === 0) return '';
    
      // El primer párrafo debe ir dentro de <p>
      const firstParagraph = `<p>${lines[0]}</p>`;
    
      // Función para determinar si una línea es un encabezado
      const isHeader = (line: string) => {
        return line === "INVESTIGACIÓN:" || 
        line === "PROMOCIÓN AL DESARROLLO (Desarrollo de proyectos, asesorías técnicas y cursos de capacitación) en:"
        ||line=="DIFUSIÓN CULTURAL mediante:"
         || line=="APOYO AL SISTEMA DE UNIVERSIDADES ESTATALES DE OAXACA(SUNEO) de la siguiente forma:";
      };
    
      // Inicializa el resultado HTML para las listas
      let html = '';
      let currentListItems: string[] = [];
    
      // Itera sobre las líneas restantes
      for (const line of lines.slice(1)) {
        if (isHeader(line)) {
          // Si ya hay elementos en currentListItems, agrégales una sublista <ul>
          if (currentListItems.length > 0) {
            html += `<ul class="reduce-spacing">${currentListItems.join('')}</ul>`;
            currentListItems = []; // Limpia currentListItems para el siguiente conjunto de elementos
          }
          // Agrega el encabezado a la lista principal
          html += `<li class="list"><strong>${line}</strong></li>`;
        } else {
          // Agrega el párrafo a la lista actual
          currentListItems.push(`<li>${line}</li>`);
        }
      }
    
      // Si quedan elementos en currentListItems, agrégales una sublista <ul>
      if (currentListItems.length > 0) {
        html += `<ul class="reduce-spacing">${currentListItems.join('')}</ul>`;
      }
    
      // Combina el primer párrafo y la lista
      return firstParagraph + '<ul>' + html + '</ul>';
    }
    
    
    
    
    
}
