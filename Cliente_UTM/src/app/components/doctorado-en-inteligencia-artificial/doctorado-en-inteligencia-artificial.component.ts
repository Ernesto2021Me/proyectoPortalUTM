import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { CarrerasService } from 'src/app/services/carreras.service';
import { Informacion_careras_posgrados } from 'src/app/models/Informacion_carrera_posgrado';
import { Carrera } from 'src/app/models/carreras';
import { Nucleo_academico } from 'src/app/models/nucleo_academico';
import { Lineas_de_generacion } from 'src/app/models/lineas_de_generacion';
import { TutoriaSeguimiento } from 'src/app/models/tutoria_segumiento';
import { Alumnos_matriculados } from 'src/app/models/alumnos_matriculados_posgrado';
import { vinculacion_sector } from 'src/app/models/Vinculacion_sector';
import { Productividad_academica_publicaciones } from 'src/app/models/productividad_academica_pub';
import { Productividad_academica_eventos } from 'src/app/models/productividad-academica_event';
import { Productividad_academica_proyectos } from 'src/app/models/productividad_academica_pro';
@Component({
  selector: 'app-doctorado-en-inteligencia-artificial',
  templateUrl: './doctorado-en-inteligencia-artificial.component.html',
  styleUrls: ['./doctorado-en-inteligencia-artificial.component.css']
})
export class DoctoradoEnInteligenciaArtificialComponent implements OnInit {
  licenciaturas: Carrera[] = [];
  posgrados: Carrera[] = [];
  datos_carrera = new Informacion_careras_posgrados();
  nucleo_academico: Nucleo_academico[]=[];
  lineas_de_generacion: Lineas_de_generacion[]=[];
  panels: { title: string, content: string }[] = [];
  openIndex: number | null = null;
  tutoria_segumiento: TutoriaSeguimiento[]=[];
  alumnos_matriculados: Alumnos_matriculados[]=[];
  vinculacion_sector: vinculacion_sector[]=[];
  productividad_publicaciones: Productividad_academica_publicaciones[]=[];
  productividad_eventos: Productividad_academica_eventos[]=[];
  productividad_proyectos: Productividad_academica_proyectos[]=[];
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
    'Doctorado en Electrónica, Opción: Sistemas Inteligentes Aplicados': '/home/ensenanza/posgrados/doctorado_en_electronica_especialidad_sistemas_inteligentes_aplicados',
    'Doctorado en Inteligencia Artificial': '/home/ensenanza/posgrados/doctorado_en_inteligencia_artificial',
    'Doctorado en Modelación Matemática': '/home/ensenanza/posgrados/doctorado_en_modelacion_matematica',
    'Doctorado en Robótica': '/home/ensenanza/posgrados/doctorado_en_robotica',
  }
  constructor(private carrerasService: CarrerasService, private router: Router) { }

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
    this.loadtutoria_seguimiento();
    this.loadalumnos_matriculados();
    this.loadvinculacion_sector();
    this.loadproductividad_publicaciones();
    this.loadproductividad_eventos();
    this.loadproductividad_proyectos();
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
    this.carrerasService.informacion_carrera_posgrado('66').subscribe(
      (res: any) => { this.datos_carrera = res[0];},
      (err) => console.error(err)
    );
  }

  private loadNucleo_academico(){
    this.carrerasService.nucleo_academico('66').subscribe(
      (res: any) => { this.nucleo_academico = res;},
      (err) => console.error(err)
    );
  }

  private loadlineas_de_generacion(){
    this.carrerasService.linea_de_generacion('66').subscribe(
      (res: any) => { this.lineas_de_generacion = res;},
      (err) => console.error(err)
    );
  }
  private loadtutoria_seguimiento(){
    this.carrerasService.tutoria_seguimiento('66').subscribe(
      (res: any) => { this.tutoria_segumiento = res;},
      (err) => console.error(err)
    );
  }

  private loadalumnos_matriculados(){
    this.carrerasService.alumnos_matriculados('66').subscribe(
      (res: any) => { this.alumnos_matriculados = res;},
      (err) => console.error(err)
    );
  }

  private loadvinculacion_sector(){
    this.carrerasService.vinculacion_sector('66').subscribe(
      (res: any) => { this.vinculacion_sector = res;},
      (err) => console.error(err)
    );
  }

  private loadproductividad_publicaciones(){
    this.carrerasService.productividad_publicaciones('66').subscribe(
      (res: any) => { this.productividad_publicaciones = res;},
      (err) => console.error(err)
    );
  }

  private loadproductividad_eventos(){
    this.carrerasService.productividad_eventos('66').subscribe(
      (res: any) => { this.productividad_eventos = res;},
      (err) => console.error(err)
    );
  }

  private loadproductividad_proyectos(){
    this.carrerasService.productividad_proyectos('66').subscribe(
      (res: any) => { this.productividad_proyectos = res;},
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



  formatDocumentText(text: string): string {
    let formattedText = '';
    let listLevel = 0; // Nivel actual de listas
    let sublistStack: number[] = []; // Pila para manejar múltiples niveles de sublistas
    let newSublist = false; // Bandera para indicar si estamos en una nueva sublista

    // Dividimos el texto en líneas para procesar cada línea por separado
    const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Maneja "Título:" y "Subtitulo:"
        if (line.startsWith('Título: ')) {
            // Cierra todas las listas abiertas antes de los títulos
            if (listLevel > 0) {
                formattedText += '</ul>'.repeat(listLevel);
                listLevel = 0;
            }
            // Cierra cualquier sublista abierta
            if (sublistStack.length > 0) {
                formattedText += '</ul>'.repeat(sublistStack.length);
                sublistStack = [];
            }
            const title = line.substring(8).trim();
            formattedText += `<h1><strong>${title}</strong></h1>`;
        } else if (line.startsWith('Subtitulo: ')) {
            // Cierra todas las listas abiertas antes de los subtítulos
            if (listLevel > 0) {
                formattedText += '</ul>'.repeat(listLevel);
                listLevel = 0;
            }
            // Cierra cualquier sublista abierta
            if (sublistStack.length > 0) {
                formattedText += '</ul>'.repeat(sublistStack.length);
                sublistStack = [];
            }
            const subtitle = line.substring(11).trim();
            formattedText += `<p><strong>${subtitle}</strong></p>`;
        } else if (line.startsWith('Subtituloinfo: ')) {
            // Cierra todas las listas abiertas antes de la información
            if (listLevel > 0) {
                formattedText += '</ul>'.repeat(listLevel);
                listLevel = 0;
            }
            // Cierra cualquier sublista abierta
            if (sublistStack.length > 0) {
                formattedText += '</ul>'.repeat(sublistStack.length);
                sublistStack = [];
            }
            const parts = line.substring(15).split(':');
            const infoTitle = parts[0].trim();
            const infoContent = parts[1].trim();
            formattedText += `<p><strong>${infoTitle}:</strong> ${infoContent}</p>`;
        } else if (line.startsWith('Lista_titulo:')) {
            // Manejo de Lista_titulo
            if (listLevel > 0) {
                formattedText += '</ul>'.repeat(listLevel);
                listLevel = 0;
            }
            // Cierra cualquier sublista abierta
            if (sublistStack.length > 0) {
                formattedText += '</ul>'.repeat(sublistStack.length);
                sublistStack = [];
            }
            const parts = line.substring(13).split(':');
            const listTitle = parts[0].trim();
            const listContent = parts[1] ? parts[1].trim() : '';
            formattedText += `<p>${listTitle}:</p><ul class="reduce-spacing">`;
            if (listContent) {
                formattedText += `<li>${listContent}</li>`;
            }
            listLevel = 1; // Marca que estamos en el nivel 1 de lista
        } else if (line.startsWith('Lista_titulonegr:')) {
            // Manejo de Lista_titulonegr
            if (listLevel > 0) {
                formattedText += '</ul>'.repeat(listLevel);
                listLevel = 0;
            }
            // Cierra cualquier sublista abierta
            if (sublistStack.length > 0) {
                formattedText += '</ul>'.repeat(sublistStack.length);
                sublistStack = [];
            }
            const parts = line.substring(17).split(':');
            const listTitle = parts[0].trim();
            const listContent = parts[1] ? parts[1].trim() : '';
            formattedText += `<p><strong>${listTitle}</strong></p><ul class="reduce-spacing">`;
            if (listContent) {
                formattedText += `<li><strong>${listContent}</strong></li>`;
            }
            listLevel = 1; // Marca que estamos en el nivel 1 de lista
        } else if (line.startsWith('Sublista:')) {
            // Manejo de Sublista
            if (listLevel > 0) {
                // Si estamos en una lista principal y se inicia una sublista, se agrega el primer ítem como <li>
                if (!newSublist) {
                    formattedText += `<li>${line.substring(9).trim()}</li>`;
                    newSublist = true; // Marca que ahora estamos en una sublista
                }
                formattedText += '<ul class="reduce-spacing">'; // Inicia una nueva sublista
                sublistStack.push(1); // Incrementa el nivel de sublistas
            } else {
                formattedText += '<ul class="reduce-spacing">'; // Inicia una nueva lista si no estamos en una lista principal
                listLevel = 1; // Marca que estamos en el nivel 1 de lista
            }
        } else if (line.startsWith('endSublista')) {
            // Cierre de Sublista
            if (sublistStack.length > 0) {
                formattedText += '</ul>';
                sublistStack.pop(); // Decrementa el nivel de sublistas
            }
            newSublist = false; // Restablece la bandera cuando se cierra una sublista
        } else if (line.startsWith('Lista:')) {
            // Manejo de Lista
            if (sublistStack.length > 0) {
                formattedText += '</ul>'.repeat(sublistStack.length);
                sublistStack = [];
            }
            if (listLevel > 0) {
                formattedText += '</ul>';
                listLevel = 0;
            }
            formattedText += '<ul class="reduce-spacing">'; // Inicia una nueva lista sin el título
            listLevel = 1; // Marca que estamos en el nivel 1 de lista
        } else if (line.startsWith('Informacion:')) {
            // Manejo de Informacion
            if (listLevel > 0) {
                formattedText += '</ul>'.repeat(listLevel);
                listLevel = 0;
            }
            // Cierra cualquier sublista abierta
            if (sublistStack.length > 0) {
                formattedText += '</ul>'.repeat(sublistStack.length);
                sublistStack = [];
            }
            const infoContent = line.substring(12).trim();
            formattedText += `<p>${infoContent}</p>`;
        } else if (listLevel > 0) {
            // Manejo de elementos de lista
            formattedText += `<li>${line}</li>`;
        } else if (sublistStack.length > 0) {
            // Manejo de elementos de sublista
            formattedText += `<li>${line}</li>`;
        } else {
            // Para líneas que no son listas ni títulos, se agregan tal cual
            formattedText += `<p>${line}</p>`;
        }
    }

    // Cierra el último <ul> si está abierto
    if (listLevel > 0) {
        formattedText += '</ul>'.repeat(listLevel);
    }
    if (sublistStack.length > 0) {
        formattedText += '</ul>'.repeat(sublistStack.length);
    }

    return formattedText;
}

    
}