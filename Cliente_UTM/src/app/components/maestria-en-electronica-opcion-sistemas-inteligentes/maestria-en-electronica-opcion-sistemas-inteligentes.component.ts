import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { Router } from '@angular/router';

import { CarrerasService } from 'src/app/services/carreras.service';
import { Informacion_careras_posgrados } from 'src/app/models/Informacion_carrera_posgrado';
import { Carrera } from 'src/app/models/carreras';
import { Nucleo_academico } from 'src/app/models/nucleo_academico';
import { Lineas_de_generacion } from 'src/app/models/lineas_de_generacion';
@Component({
  selector: 'app-maestria-en-electronica-opcion-sistemas-inteligentes',
  templateUrl: './maestria-en-electronica-opcion-sistemas-inteligentes.component.html',
  styleUrls: ['./maestria-en-electronica-opcion-sistemas-inteligentes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MaestriaEnElectronicaOpcionSistemasInteligentesComponent implements OnInit {
  
  licenciaturas: Carrera[] = [];
    posgrados: Carrera[] = [];
    datos_carrera=new Informacion_careras_posgrados();
    nucleo_academico: Nucleo_academico[]=[];
    lineas_de_generacion: Lineas_de_generacion[]=[];
    panels: { title: string, content: string }[] = [];
    openIndex: number | null = null;
  
    urlMapping: { [key: string]: string } = {
      // Licenciaturas
      'Ingeniería en Computación': '/home/ensenanza/licenciaturas/ingenieria_en_computacion',
      'Ingeniería en Electrónica': '/home/ensenanza/licenciaturas/ingenieria_en_electronica',
      'Ingeniería en Diseño': '/home/ensenanza/licenciaturas/ingenieria_en_diseno',
      'Licenciatura en Ciencias Empresariales': '/home/ensenanza/licenciaturas/licenciatura_en_ciencias_empresariales',
      'Licenciatura en Matemáticas Aplicadas': '/home/ensenanza/licenciaturas/licenciatura_en_matematicas_aplicadas',
      'Ingeniería en Alimentos': '/home/ensenanza/licenciaturas/ingenieria_en_alimentos',
      'Ingeniería Industrial': '/home/ensenanza/licenciaturas/ingenieria_industrial',
      'Licenciatura en Estudios Mexicanos': 'http://virtual.utm.mx/licenciatura_estudios_mexicanos.html',
      'Ingeniería en Mecatrónica': '/home/ensenanza/licenciaturas/ingenieria_en_mecatronica',
      'Ingeniería en Física Aplicada': '/home/ensenanza/licenciaturas/ingenieria_en_fisica_aplicada',
      'Ingeniería en Mecánica Automotriz': '/home/ensenanza/licenciaturas/ingenieria_en_mecanica_automotriz',
      'Ingeniería Civil': '/home/ensenanza/licenciaturas/ingenieria_civil',
      'Ingeniería Química en Procesos Sostenibles': '/home/ensenanza/licenciaturas/ingenieria_quimica_en_procesos_sostenibles',
    
      // Programas de Posgrado
      'Maestría en Administración de Negocios': '/home/ensenanza/posgrados/maestria_en_administracion_negocios',
      'Maestría en Ciencias de Materiales': '/home/ensenanza/posgrados/maestria_en_ciencias_materiales',
      'Maestría en Ciencias: Productos Naturales y Alimentos': '/home/ensenanza/posgrados/maestria_en_ciencias_productos_naturales_alimentacion',
      'Maestría en Diseño de Modas': '/home/ensenanza/posgrados/maestria_en_diseno_modas',
      'Maestría en Diseño de Muebles': '/home/ensenanza/posgrados/maestria_en_diseno_muebles',
      'Maestría en Electrónica Opción: Sistemas Inteligentes Aplicados': '/home/ensenanza/posgrados/maestria_en_electronica_en_sistemas_inteligentes',
      'Maestría en Ingeniería de Software': '/home/ensenanza/posgrados/maestria_en_ingenieria_de_software',
      'Maestría en Inteligencia Artificial': '/home/ensenanza/posgrados/maestria_en_inteligencia_artificial',
      'Maestría en Medios Interactivos': '/home/ensenanza/posgrados/maestria_en_medios_interactivos',
      'Maestría en Modelación Matemática': '/home/ensenanza/posgrados/maestria_en_modelacion_matematica',
      'Maestría en Robótica': '/home/ensenanza/posgrados/maestria_en_robotica',
      'Maestría en Tecnología Avanzada de Manufactura': '/home/ensenanza/posgrados/maestria_en_tecnologia_avanzada_de_manufactura',
      'Maestría en Ciencia de Datos': 'http://virtual.utm.mx/maestria_ciencia_datos.html',
      'Doctorado en Ciencias: Productos Naturales y Alimentos': '/home/ensenanza/posgrados/doctorado_en_ciencias_productos_naturales_alimentos',
      'Doctorado en Electrónica Especialidad Sistemas Inteligentes Aplicados': '/home/ensenanza/posgrados/doctorado_en_electronica_especialidad_sistemas_inteligentes_aplicados',
      'Doctorado en Inteligencia Artificial': '/home/ensenanza/posgrados/doctorado_en_inteligencia_artificial',
      'Doctorado en Modelación Matemática': '/home/ensenanza/posgrados/doctorado_en_modelacion_matematica',
      'Doctorado en Robótica': '/home/ensenanza/posgrados/doctorado_en_robotica',
    }  
    constructor(private carrerasService: CarrerasService, private router: Router) {}
  
    ngOnInit(): void {
      this.initializePanels();
      this.loadData();
    }

  private initializePanels(): void {
    this.panels = [
      { title: 'MISIÓN', content: 'Contenido del panel 1' },
      { title: 'VISIÓN', content: 'Contenido del panel 2' },
      { title: 'OBJETIVO', content: 'Contenido del panel 3' },
      { title: 'PERFIL DE INGRESO', content: 'Contenido del panel 4' },
      { title: 'PERFIL DE EGRESO', content: 'Contenido del panel 5' },
      { title: 'ESTRUCTURA DEL PLAN DE ESTUDIOS', content: 'Contenido del panel 6' },
      { title: 'NÚMERO DE ALUMNOS MATRICULADOS', content: 'Contenido del panel 7' },
      { title: 'NÚCLEO ACADÉMICO BÁSICO', content: 'Contenido del panel 8' },
      { title: 'LÍNEAS DE GENERACIÓN Y APLICACIÓN DE CONOCIMIENTO DEL PROGRAMA', content: 'Contenido del panel 9' },
      { title: 'TUTORÍA DE SEGUIMIENTO ACADÉMICO', content: 'Contenido del panel 10' },
      { title: 'PRODUCTIVIDAD ACADÉMICA RELEVANTE', content: 'Contenido del panel 11' },
      { title: 'VINCULACIÓN CON OTROS SECTORES DE LA SOCIEDAD', content: 'Contenido del panel 12' },
      { title: 'EGRESADOS', content: 'Contenido del panel 13' }, 
      { title: 'PROCESOS ADMINISTRATIVOS', content: 'Contenido del panel 14' }, 
      { title: 'INFORMACIÓN DE BECAS CONACYT', content: 'Contenido del panel 15' }, 
  ];
  
  }
  private loadData(): void {
    this.loadCarreras();
    this.loadInformacion_carreras_posgrado();
    this.loadNucleo_academico();
    this.loadlineas_de_generacion();
  }


  private loadCarreras(): void {
    this.carrerasService.list_licenciaturas().subscribe(
      (res: any) => this.licenciaturas = res,
      (err) => console.error(err)
    );

    this.carrerasService.list_posgrados().subscribe(
      (res: any) => this.posgrados = res,
      (err) => console.error(err)
    );
  }

  private loadInformacion_carreras_posgrado(): void {
    this.carrerasService.informacion_carrera_posgrado('60').subscribe(
      (res: any) => {this.datos_carrera= res[0];  },
      (err) => console.error(err)
    );
  }

  private loadNucleo_academico(){
    this.carrerasService.nucleo_academico('60').subscribe(
      (res: any) => { this.nucleo_academico = res;},
      (err) => console.error(err)
    );
  }

  private loadlineas_de_generacion(){
    this.carrerasService.linea_de_generacion('60').subscribe(
      (res: any) => { this.lineas_de_generacion = res;},
      (err) => console.error(err)
    );
  }
  

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
  
  isOpen(index: number): boolean {
    return this.openIndex === index;
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
      return    line === "PROPÓSITOS DEL PROGRAMA"
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
      html += `<ul  style="list-style-type: none;" class="reduce-spacing">${currentListItems.join('')}</ul>`;
    }
    return firstParagraph + '<ul>' + html + '</ul>';
  }

  formatText_3(text: string): string {
    let lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    if (lines.length > 0) {
        let firstParagraph = `<p>${lines[0]}</p>`;
        let listItems = lines.slice(1).map(line => `<li>${line}</li>`).join('');
        let list = `<ul class="reduce-spacing">${listItems}</ul>`;
        return `${firstParagraph}${list}`;
    }
    return '';
     }
 
     formatText_4(text: string): string {
      const boldWords = ['Conocimientos:', 'Habilidades:','Actitudes y valores:']; // Palabras específicas en negrita
    
      let lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
      if (lines.length > 0) {
          let firstParagraph = `<p>${lines[0]}</p>`;
          
          // Función para poner en negrita las palabras específicas
          const applyBold = (line: string): string => {
              let formattedLine = line;
              boldWords.forEach(word => {
                  // Escapar caracteres especiales en la palabra
                  const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                  // Expresión regular para buscar la palabra completa
                  const regex = new RegExp(escapedWord, 'gi');
                  formattedLine = formattedLine.replace(regex, `<strong>${word}</strong>`);
              });
              return formattedLine;
          };
    
          let listItems = lines.slice(1).map(line => `<li>${applyBold(line)}</li>`).join('');
          let list = `<ul class="reduce-spacing list">${listItems}</ul>`;
          return `${firstParagraph}${list}`;
      }
      return '';
    }

   
}
