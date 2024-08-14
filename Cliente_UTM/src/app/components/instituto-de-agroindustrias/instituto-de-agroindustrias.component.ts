import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { InstitutosService } from 'src/app/services/institutos.service';
import {Router} from '@angular/router'
import { Instituto_informacion_general } from 'src/app/models/Informacion_general_institutos';
import { Instituto } from 'src/app/models/institutos';
@Component({
  selector: 'app-instituto-de-agroindustrias',
  templateUrl: './instituto-de-agroindustrias.component.html',
  styleUrls: ['./instituto-de-agroindustrias.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class InstitutoDeAgroindustriasComponent implements OnInit {
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
    this.InstitutosService.informacion_general_instituto('008' ).subscribe(
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
        // Redirige a una URL interna y recarga la página
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
  
    
    formatText(text: string): string {
      // Divide el texto en líneas y elimina espacios en blanco
      const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    
      // Si no hay líneas, devuelve una cadena vacía
      if (lines.length === 0) return '';
    
      // Inicializa el resultado HTML para los párrafos y listas
      let html = '';
      let currentListItems: string[] = [];
      let paragraphsAdded = 0;
    
      // Itera sobre las líneas
      for (const line of lines) {
        // Si hemos agregado menos de 3 párrafos, agrégales <p>
        if (paragraphsAdded < 3) {
          html += `<p>${line}</p>`;
          paragraphsAdded++;
        } else {
          // Agrega el párrafo a la lista actual
          currentListItems.push(`<li>${line}</li>`);
        }
      }
    
      // Si quedan elementos en currentListItems, agrégales una sublista <ul>
      if (currentListItems.length > 0) {
        html += `<ul class="reduce-spacing">${currentListItems.join('')}</ul>`;
      }
    
      // Devuelve el HTML con los primeros 3 párrafos y la lista
      return html;
    }


    formatText_2(text: string): string {
       // Divide el texto en líneas y elimina espacios en blanco
  const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);

  // Si no hay líneas, devuelve una cadena vacía
  if (lines.length === 0) return '';

  // Inicializa el resultado HTML para los párrafos y listas
  let html = '';
  let currentListItems: string[] = [];

  // Si hay al menos una línea, envuelve la primera línea en <p>
  if (lines.length > 0) {
    html += `<p>${lines[0]}</p>`;
  }

  // Itera sobre las líneas restantes
  for (const line of lines.slice(1)) {
    // Agrega el párrafo a la lista actual
    currentListItems.push(`<li>${line}</li>`);
  }

  // Si quedan elementos en currentListItems, agrégales una sublista <ul>
  if (currentListItems.length > 0) {
    html += `<ul class="reduce-spacing">${currentListItems.join('')}</ul>`;
  }

  // Devuelve el HTML con el primer párrafo y la lista
  return html
   }
}
