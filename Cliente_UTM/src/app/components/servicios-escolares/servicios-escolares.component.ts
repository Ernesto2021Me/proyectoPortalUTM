import { Component, OnInit } from '@angular/core';
import { CarrerasService } from 'src/app/services/carreras.service';
import { Carrera } from 'src/app/models/carreras';
import {Router} from '@angular/router'
@Component({
  selector: 'app-servicios-escolares',
  templateUrl: './servicios-escolares.component.html',
  styleUrls: ['./servicios-escolares.component.css']
})
export class ServiciosEscolaresComponent implements OnInit {
  licenciaturas: Carrera[] = [];
  posgrados: Carrera[] = [];
  panels: { title: string, content: string }[] = [];
  openIndex: number | null = 0;

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
    this.loadData();
    this.initializePanels();    
  }

  private initializePanels(){
    this.panels = [
      { title: 'AVISOS', content: 'Contenido del panel 1' },
      { title: 'CALENDARIO ESCOLAR', content: 'Contenido del panel 1' },
      { title: 'PROCESO DE ADMISION', content: 'Contenido del panel 1' },
      { title: 'INSCRIPCIONES & RESINCRIPCIONES', content: 'Contenido del panel 1' },
      { title: 'SOLICITUD DE BECAS', content: 'Contenido del panel 1' },
      { title: 'EXAMENES & RECURSAMIENTO', content: 'Contenido del panel 1' },
      { title: 'SERVICIO SOCIAL', content: 'Contenido del panel 1' },
      { title: 'ESTANCIAS PROFESIONALES', content: 'Contenido del panel 1' },
      { title: 'PROCESOS DE TITULACION', content: 'Contenido del panel 1' },
      { title: 'SEGUIMIENTO DE EGRESADOS', content: 'Contenido del panel 1' },
      { title: 'CONTACTO', content: 'Contenido del panel 1' },
      { title: 'OTROS FORMATOS', content: 'Contenido del panel 1' },
    ];
  }
  private loadData(): void {
    this.loadCarreras();
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
}