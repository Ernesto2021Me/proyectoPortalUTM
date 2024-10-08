import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { Router } from '@angular/router';

import { CarrerasService } from 'src/app/services/carreras.service';
import { Informacion_careras } from 'src/app/models/Informacion_carrera';
import { Carrera } from 'src/app/models/carreras';
@Component({
  selector: 'app-ingenieria-mecanica-automotriz',
  templateUrl: './ingenieria-mecanica-automotriz.component.html',
  styleUrls: ['./ingenieria-mecanica-automotriz.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IngenieriaMecanicaAutomotrizComponent implements OnInit {
  licenciaturas: Carrera[] = [];
  posgrados: Carrera[] = [];
  datos_carrera=new Informacion_careras();

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
    'Maestría en Electrónica Opción en Sistemas Inteligentes Aplicados': '/home/ensenanza/posgrados/maestria_en_electronica_en_sistemas_inteligentes',
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
      { title: 'JEFATURA DE CARRERA', content: 'Contenido del panel 1' },
      { title: 'MISIÓN', content: 'Contenido del panel 2' },
      { title: 'VISIÓN', content: 'Contenido del panel 3' },
      { title: 'OBJETIVO', content: 'Contenido del panel 4' },
      { title: 'PERFIL DE INGRESO', content: 'Contenido del panel 5' },
      { title: 'PERFIL DE EGRESO', content: 'Contenido del panel 6' },
      { title: 'CAMPO DE ACCIÓN', content: 'Contenido del panel 7' },
      { title: 'PLAN DE ESTUDIOS', content: 'Contenido del panel 8' },
    ];
  }

  private loadData(): void {
    this.loadCarreras();
    this.loadInformacion_carreras();
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

  private loadInformacion_carreras(): void {
    this.carrerasService.informacion_carrera('31').subscribe(
      (res: any) => {this.datos_carrera= res[0]; console.log(this.datos_carrera); },
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

  textToHtml(text: string): string {
    const lines = text.split('\n');
    const result: string[] = [];
    let listStack: number[] = []; // Pila para rastrear el nivel de listas anidadas
    let inList = false; // Bandera para saber si estamos dentro de una lista

    // Función para procesar y reemplazar enlaces en una línea de texto
    function processText(text: string): string {
        // Procesar negritas
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        text = text.replace(/__(.*?)__/g, '<strong>$1</strong>');

        // Procesar enlaces
        text = text.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>');

        return text;
    }

    for (const line of lines) {
        // Identificar encabezados
        const headerMatch = line.match(/^(\#{1,6})\s*(.*)$/);
        if (headerMatch) {
            const [_, hashes, content] = headerMatch;
            const level = hashes.length;
            if (inList) {
                while (listStack.length > 0) {
                    result.push('</li></' + (listStack.length > 1 ? 'ul>' : 'ul>'));
                    listStack.pop();
                }
                inList = false;
            }
            result.push(`<h${level}>${processText(content)}</h${level}>`);
            continue;
        }

        // Identificar listas
        const listMatch = line.match(/^(\s*)([\*\-])\s*(.*)$/);
        if (listMatch) {
            const [_, spaces, marker, content] = listMatch;
            const currentLevel = spaces.length / 2; // Asumimos que cada nivel de anidación usa 2 espacios
            const isList = marker === '*' || marker === '-';
            const listTag = isList ? 'ul' : 'ol';

            while (listStack.length > currentLevel) {
                result.push(`</li></${listStack[listStack.length - 1] === 0 ? 'ul>' : 'ul>'}`);
                listStack.pop();
            }

            if (listStack.length === currentLevel) {
                if (inList) {
                    result.push('</li>');
                }
                result.push(`<${listTag}><li>${processText(content)}`);
                inList = true;
                listStack.push(currentLevel);
            } else {
                result.push(`<${listTag}><li>${processText(content)}`);
                inList = true;
                listStack.push(currentLevel);
            }
            continue;
        }

        // Manejo de párrafos
        if (inList) {
            while (listStack.length > 0) {
                result.push('</li></' + (listStack.length > 1 ? 'ul>' : 'ul>'));
                listStack.pop();
            }
            inList = false;
        }

        // Procesar la línea del párrafo y agregar a resultados
        const processedLine = processText(line);
        if (processedLine.trim()) {
            result.push(`<p>${processedLine}</p>`);
        }
    }

    // Cerramos cualquier lista abierta
    while (listStack.length > 0) {
        result.push('</li></' + (listStack.length > 1 ? 'ul>' : 'ul>'));
        listStack.pop();
    }

    return result.join('\n');
}
  
}
