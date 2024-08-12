import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CarrerasService } from 'src/app/services/carreras.service';
import { Carrera } from 'src/app/models/carreras';
import { Perfil } from 'src/app/models/perfiles';
import { Mision } from 'src/app/models/mision';
import { Campo_accion } from 'src/app/models/campo_accion';
import { Jefe_carrera } from 'src/app/models/jefe_carreras';
import { Vision } from 'src/app/models/vision';
import { Objetivo } from 'src/app/models/objetivo';
@Component({
  selector: 'app-licenciatura-en-ciencias-empresariales',
  templateUrl: './licenciatura-en-ciencias-empresariales.component.html',
  styleUrls: ['./licenciatura-en-ciencias-empresariales.component.css']
})
export class LicenciaturaEnCienciasEmpresarialesComponent implements OnInit {
  licenciaturas: Carrera[] = [];
  posgrados: Carrera[] = [];
  jefe_carrera = new Jefe_carrera();
  mision = new Mision();
  vision = new Vision();
  objetivo = new Objetivo();
  perfil_egreso = new Perfil();
  perfil_ingreso = new Perfil();
  campos = new Campo_accion();

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
    this.loadJefeCarrera();
    this.loadCarreras();
    this.loadMision();
    this.loadVision();
    this.loadObjetivo();
    this.loadPerfilIngreso();
    this.loadPerfilEgreso();
    this.loadCampoAccion();
  }

  private loadJefeCarrera(): void {
    this.carrerasService.list_one_jefe_carrera('05').subscribe(
      (res: any) => this.jefe_carrera = res[0],
      (err) => console.error(err)
    );
  }

  private loadMision(): void {
    this.carrerasService.list_one_mision('05').subscribe(
      (res: any) => this.mision = this.extractMisionData(res),
      (err) => console.error(err)
    );
  }

  private loadVision(): void {
    this.carrerasService.list_one_vision('05').subscribe(
      (res: any) => this.vision = this.extractVisionData(res),
      (err) => console.error(err)
    );
  }

  private loadObjetivo(): void {
    this.carrerasService.list_one_objetivo('05').subscribe(
      (res: any) => this.objetivo = this.extractObjetivoData(res),
      (err) => console.error(err)
    );
  }

  private loadPerfilIngreso(): void {
    this.carrerasService.list_perfil_ingreso('05').subscribe(
      (res: any) => this.perfil_ingreso = this.extractPerfilData(res, 'ingreso'),
      (err) => console.error(err)
    );
  }

  private loadPerfilEgreso(): void {
    this.carrerasService.list_perfil_egreso('05').subscribe(
      (res: any) => this.perfil_egreso = this.extractPerfilData(res, 'egreso'),
      (err) => console.error(err)
    );
  }

  private loadCampoAccion(): void {
    this.carrerasService.list_perfil_campo('05').subscribe(
      (res: any) => this.campos = this.extractCampoAccionData(res),
      (err) => console.error(err)
    );
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

  private extractMisionData(resultados: any[]): Mision {
    const mision = new Mision();
    if (resultados.length > 0) {
      mision.mision = resultados[0].mision || '';
      mision.descripcion_mision = this.extractUniqueDescriptions(resultados, 'descripcion_mision');
    }
    return mision;
  }

  private extractVisionData(resultados: any[]): Vision {
    const vision = new Vision();
    if (resultados.length > 0) {
      vision.vision = resultados[0].vision || '';
      vision.descripcion_vision = this.extractUniqueDescriptions(resultados, 'descripcion_vision');
    }
    return vision;
  }

  private extractObjetivoData(resultados: any[]): Objetivo {
    const objetivo = new Objetivo();
    if (resultados.length > 0) {
      objetivo.objetivo = resultados[0].objetivos || '';
      objetivo.descripcion_objetivo = this.extractUniqueDescriptions(resultados, 'descripcion_objetivo');
    }
    return objetivo;
  }

  private extractPerfilData(resultados: any[], tipo: 'ingreso' | 'egreso'): Perfil {
    const perfil = new Perfil();
    if (resultados.length > 0) {
      perfil.perfil = resultados[0][`perfil_${tipo}`] || '';
      perfil.descripcion_conocimiento = this.extractUniqueDescriptions(resultados, `descripcion_conocimiento_${tipo}`);
      perfil.descripcion_habilidad = this.extractUniqueDescriptions(resultados, `descripcion_habilidad_${tipo}`);
      perfil.descripcion_valores = this.extractUniqueDescriptions(resultados, `descripcion_valores_${tipo}`);
    }
    return perfil;
  }

  private extractCampoAccionData(resultados: any[]): Campo_accion {
    const campo = new Campo_accion();
    if (resultados.length > 0) {
      campo.campo = resultados[0].campo_accion || '';
      campo.descripcion_campo_accion = this.extractUniqueDescriptions(resultados, 'descripcion_campo');
    }
    return campo;
  }

  private extractUniqueDescriptions(resultados: any[], key: string): string[] {
    return Array.from(new Set(
      resultados
        .map(result => result[key])
        .filter(desc => desc)
    ));
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
      if (['Licenciatura en Estudios Mexicanos', 'Maestría en Ciencia de Datos'].includes(nombre_direccion)) {
        window.open(url, '_blank');
      } else {
        this.router.navigate([url]);
      }
    } else {
      console.error('URL no encontrada para el nombre de carrera:', nombre_direccion);
    }
  }
}
