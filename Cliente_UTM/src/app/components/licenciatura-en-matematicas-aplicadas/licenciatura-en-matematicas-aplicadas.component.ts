import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { Router } from '@angular/router';

import { CarrerasService } from 'src/app/services/carreras.service';
import { Informacion_careras } from 'src/app/models/Informacion_carrera';
import { Carrera } from 'src/app/models/carreras';

@Component({
  selector: 'app-licenciatura-en-matematicas-aplicadas',
  templateUrl: './licenciatura-en-matematicas-aplicadas.component.html',
  styleUrls: ['./licenciatura-en-matematicas-aplicadas.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LicenciaturaEnMatematicasAplicadasComponent implements OnInit {
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
    this.carrerasService.informacion_carrera('07').subscribe(
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

  formatTextAsList_2(text: string): string {
    // Divide el texto en líneas y limpia espacios innecesarios
    let lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    
    // Variable para almacenar el HTML final
    let html = '';
    
    // Iterar sobre las líneas para construir el HTML
    for (let line of lines) {
      // Detectar el patrón específico
      if (line.startsWith('Sólidos en al menos una de las siguientes líneas terminales con orientación a:')) {
        // Extraer la parte de la línea que sigue después del patrón
        let parts = line.split(':');
        let mainItem = parts[0].trim(); // "Sólidos en las áreas del conocimiento:"
        let subItems = parts[1] ? parts[1].trim().split(',').map(item => item.trim()) : [];
  
        // Construir el HTML para el ítem principal
        html += `<li>${mainItem}:`;
        
        // Construir el HTML para la lista anidada
        if (subItems.length > 0) {
          let subListItems = subItems.map(item => {
            // Añadir punto al final si no lo tiene
            if (!item.endsWith('.')) {
              item += '.';
            }
            return `<li>${item}</li>`;
          }).join('');
          html += `<ul class="reduce-spacing">${subListItems}</ul>`;
        }
        
        // Cerrar el ítem principal
        html += `</li>`;
      } else {
        // Para otras líneas simplemente agregarlas como ítems de lista
        html += `<li>${line}</li>`;
      }
    }
    
    // Envolver el HTML en una lista no ordenada
    return `<ul class="reduce-spacing">${html}</ul>`;
  }

  formatTextAsList_3(text: string): string {
    // Divide el texto en líneas y limpia los espacios en blanco.
    let lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    
    // Define los títulos y los rangos de índices para cada categoría.
    const categories = [
      {
        title: 'Como profesionista independiente:',
        start: 0,
        end: 4
      },
      {
        title: 'Como miembro de una Empresa o Industria:',
        start: 4,
        end: 8
      },
      {
        title: 'Como miembro de alguna Institución u Organización:',
        start: 8,
        end: 11
      }
    ];
  
    // Genera el HTML para las sub-listas.
    const generateList = (items: string[]): string => {
      const listItems = items.map(item => `<li>${item}</li>`).join('');
      return `<ul class="reduce-spacing">${listItems}</ul>`;
    };
  
    // Genera el HTML para las categorías.
    const categoryHtml = categories.map(category => {
      const subItems = lines.slice(category.start, category.end);
      const subListHtml = generateList(subItems);
      return `<li><strong>${category.title}</strong>${subListHtml}</li>`;
    }).join('');
  
    return `<ul class="reduce-spacing">${categoryHtml}</ul>`;
  }
  
  formatText(text: string): string {
    return text.split('\n').map(line => line.trim()).filter(line => line.length > 0).map(paragraph => `<p>${paragraph}</p>`).join('');
  }
}
