// pruebas.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarrerasService } from 'src/app/services/carreras.service';
import { Instituto } from 'src/app/models/institutos';
import { InstitutosService } from 'src/app/services/institutos.service';
import {Router} from '@angular/router'
import { Carrera } from 'src/app/models/carreras';
@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {
 licenciaturas:Carrera[]=[]
 posgrados: Carrera[]=[]
 institutos: Instituto[]=[]
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
  'Ingeniería Mecánica Automotriz': '/home/ensenanza/licenciaturas/ingenieria_en_mecanica_automotriz',
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

  //Institutos de investigacion
  'Instituto de Computación': '/home/investigacion/institutos_de_investigacion/instituto_de_computacion',
  'Instituto de Electrónica y Mecatrónica': '/home/investigacion/institutos_de_investigacion/instituto_de_electronica_y_mecatronica',
  'Instituto de Diseño': '/home/investigacion/institutos_de_investigacion/instituto_de_diseno',
  'Instituto de Física y Matemáticas': '/home/investigacion/institutos_de_investigacion/instituto_de_fisica_y_matematicas',
  'Instituto de Ciencias Sociales y Humanidades': '/home/investigacion/institutos_de_investigacion/instituto_de_ciencias_sociales_y_humanidades',
  'Instituto de Agroindustrias': '/home/investigacion/institutos_de_investigacion/instituto_de_agroindustrias',
  'Instituto de Hidrología': '/home/investigacion/institutos_de_investigacion/instituto_de_hidrologia',
  'Instituto de Minería': '/home/investigacion/institutos_de_investigacion/instituto_de_mineria',
  'Instituto de Ingeniería Industrial y Automotriz': '/home/investigacion/institutos_de_investigacion/instituto_de_ingenieria_industrial_y_automotriz',

};


  constructor(private CarrerasService: CarrerasService,private router: Router,private InstitutosService: InstitutosService) {
    
  }

  ngOnInit(): void {

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

    this.InstitutosService.list_institutos_investigacion( ).subscribe(
      (resinstitutos: any) => {
        this.institutos = resinstitutos;
        console.log(this.institutos)
      },
      (err) => console.error(err)
    );
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
  }
    

  
}
