import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isMenuOpenNuestraUniversidad = false;
  isMenuOpenCultura = false;
  isMenuOpenInvestigacion = false;
  isMenuOpenCampus = false;
  isMenuOpenInvestigacionMenu = false;
  isMenuOpenDirectorio = false;
  isMenuOpenDirectorioDetail = false;
  isMenuOpenEnsenanza = false;
  isMenuOpenLicenciaturas = false;  // Nueva propiedad para el submenú "Licenciaturas"
  isMenuOpenDesarrollo = false;  // Nueva propiedad para el menú "Desarrollo"

  private closeMenuTimeout: any;
  private menuCloseDelay = 300000; // 5 minutos (300000 ms)

  menuItemsNuestraUniversidad = [
    { name: '¿Qué es la UTM?', link: '/home/nuestra_universidad/que_es_la_utm' },
    { name: 'Historia', link: '/home/nuestra_universidad/historia' },
    { name: 'Modelo Educativo', link: '/home/nuestra_universidad/modelo_educativo' },
    { name: 'Premios & Reconocimientos', link: '/home/nuestra_universidad/premios_reconocimientos' },
    { name: 'Estructura General', link: '/home/nuestra_universidad/estructura_general' },
    { name: 'Legislación Universitaria', link: '/home/nuestra_universidad/legislacion_universitaria' },
    { name: 'Correo electrónico', link: '/home/nuestra_universidad/correo_electronico' },
  ];

  menuItemsCultura = [
    { name: 'Publicaciones', link: '/home/cultura/publicaciones' }
  ];

  menuItemsDirectorio = [
    { name: 'Rectoria', link: '/home/directorio/rectoria' },
    { name: 'Vice-Rectorias', link: '/home/directorio/vice-rectorias' },
    { name: 'División de Estudios de Posgrado', link: '/home/directorio/division-estudios-posgrado' },
    { name: 'Directores de Institutos', link: '/home/directorio/directores-institutos' },
    { name: 'Jefes de Carreras', link: '/home/directorio/jefes-carreras' },
    { name: 'Personal Administrativo', link: '/home/directorio/personal-administrativo' },
    { name: 'Profesores-Investigadores', link: '/home/directorio/profesores-investigadores' },
  ];

  menuItemsIntitutos_Investigacion = [
    { name: 'Institutos de Investigación', link: '/home/investigacion/institutos_de_investigacion' },
  ];

  menuItemsCampus = [
    { name: 'Campus Huajaupan de León', link: '/home/investigacion/campus_hujaupan' },
    { name: 'Campus Huajaupan de León', link: '/home/investigacion/campus_hujaupan' },
  ];

  menuItemsCampus_licenciatura = [
    { name: 'Campus Huajaupan de Le  ón', link: '/home/investigacion/campus_hujaupan' },
    { name: 'Campus Huajaupan de Le  ón', link: '/home/investigacion/campus_hujaupan' },
  ];

  menuItemsInvestigacion = [
    { name: 'Instituto de Computación', link: '/home/investigacion/institutos_de_investigacion/instituto_de_computacion' },
    { name: 'Instituto de Electrónica y Mecatrónica', link: '/home/investigacion/institutos_de_investigacion/instituto_de_electronica_y_mecatronica' },
    { name: 'Instituto de Diseño', link: '/home/investigacion/institutos_de_investigacion/instituto_de_diseno' },
    { name: 'Instituto de Física y Matemáticas', link: '/home/investigacion/institutos_de_investigacion/instituto_de_fisica_y_matematicas' },
    { name: 'Instituto de Ciencias Sociales y Humanidades', link: '/home/investigacion/institutos_de_investigacion/instituto_de_ciencias_sociales_y_humanidades' },
    { name: 'Instituto de Agroindustrias', link: '/home/investigacion/institutos_de_investigacion/instituto_de_agroindustrias' },
    { name: 'Instituto de Hidrología', link: '/home/investigacion/institutos_de_investigacion/instituto_de_hidrologia' },
    { name: 'Instituto de Minería', link: '/home/investigacion/institutos_de_investigacion/instituto_de_mineria' },
    { name: 'Instituto de Ingeniería Industrial y Automotriz', link: '/home/investigacion/institutos_de_investigacion/instituto_de_ingenieria_industrial_y_automotriz' },
  ];

  menuItemsEnsenanza = [
    { name: 'Licenciaturas', link: '/home/ensenanza/licienciaturas' }, // Añadido el enlace a # para activar el submenú
    { name: 'Posgrados', link: '/home/ensenanza/maestrias' },
    { name: 'Ingreso a Licenciatura', link: '/home/ensenanza/ingreso-licenciatura' },
    { name: 'Ingreso a Posgrado', link: '/home/ensenanza/ingreso-posgrado' },
    { name: 'Becas', link: '/home/ensenanza/becas' },
    { name: 'Bibliotecas', link: '/home/ensenanza/bibliotecas' },
    { name: 'CECAT', link: '/home/ensenanza/cecat' },
    { name: 'Servicios Escolares', link: '/home/ensenanza/servicios-escolares' },
  ];

  menuItemsLicenciaturas = [
    { name: 'Ingeniería en Computación', link: '/home/ensenanza/licenciaturas/ingenieria_en_computacion' },
    { name: 'Ingeniería en Electrónica', link: '/home/ensenanza/licenciaturas/ingenieria_en_electronica' },
    { name: 'Ingeniería en Diseño', link: '/home/ensenanza/licenciaturas/ingenieria_en_diseno' },
    { name: 'Licenciatura en Ciencias Empresariales', link: '/home/ensenanza/licenciaturas/licenciatura_en_ciencias_empresariales' },
    { name: 'Licenciatura en Matemáticas Aplicadas', link: '/home/ensenanza/licenciaturas/licenciatura_en_matematicas_aplicadas' },
    { name: 'Ingeniería en Alimentos', link: '/home/ensenanza/licenciaturas/ingenieria_en_alimentos' },
    { name: 'Ingeniería Industrial', link: '/home/ensenanza/licenciaturas/ingenieria_industrial' },
    { name: 'Ingeniería en Mecatrónica', link: '/home/ensenanza/licenciaturas/ingenieria_en_mecatronica' },
    { name: 'Ingeniería en Física Aplicada', link: '/home/ensenanza/licenciaturas/ingenieria_en_fisica_aplicada' },
    { name: 'Ingeniería Mecánica Automotriz', link: '/home/ensenanza/licenciaturas/ingenieria_en_mecanica_automotriz' },
    { name: 'Ingeniería Civil', link: '/home/ensenanza/licenciaturas/ingenieria_civil' },
  ];

  menuItemsPosgrados = [
    { name: 'Maestría en Diseño de Modas', link: '/home/ensenanza/posgrados/maestria_diseno_modas' },
    { name: 'Maestría en Diseño de Muebles', link: '/home/ensenanza/posgrados/maestria_diseno_muebles' },
    { name: 'Maestría en Medios Interactivos', link: '/home/ensenanza/posgrados/maestria_medios_interactivos' },
    { name: 'Maestría en Ciencias de Materiales', link: '/home/ensenanza/posgrados/maestria_ciencias_materiales' },
    { name: 'Maestría en Modelación Matemática', link: '/home/ensenanza/posgrados/maestria_modelacion_matematica' },
    { name: 'Maestría en Robótica', link: '/home/ensenanza/posgrados/maestria_robotica' },
    { name: 'Maestría en Administración de Negocios', link: '/home/ensenanza/posgrados/maestria_administracion_negocios' },
    { name: 'Maestría en Tecnología Avanzada de Manufactura', link: '/home/ensenanza/posgrados/maestria_tecnologia_avanzada_manufactura' },
    { name: 'Maestría en Tecnologías de Cómputo Aplicado', link: '/home/ensenanza/posgrados/maestria_tecnologias_computo_aplicado' },
    { name: 'Maestría en Ciencias: Productos Naturales y Alimentación', link: '/home/ensenanza/posgrados/maestria_ciencias_productos_naturales_alimentacion' },
    { name: 'Maestría en Electrónica Opción: Sistemas Inteligentes', link: '/home/ensenanza/posgrados/maestria_electronica_sistemas_inteligentes' },
    { name: 'Doctorado en Robótica', link: '/home/ensenanza/posgrados/doctorado_robotica' },
    { name: 'Doctorado en Tecnologías de Cómputo Aplicado', link: '/home/ensenanza/posgrados/doctorado_tecnologias_computo_aplicado' },
    { name: 'Doctorado en Modelación Matemática', link: '/home/ensenanza/posgrados/doctorado_modelacion_matematica' },
    { name: 'Doctorado en Electrónica, Opción: Sistemas Inteligentes', link: '/home/ensenanza/posgrados/doctorado_electronica_sistemas_inteligentes' }
  ];

  menuItemsDesarrollo = [  // Nueva propiedad para el menú "Desarrollo"
    { name: 'Actividades', link: '/home/promocion_del_desarrollo/proyectos' },
    { name: 'Informes', link: '/home/promocion_del_desarrollo/iniciativas' },
    { name: 'Oportunidades', link: '/home/promocion_del_desarrollo/oportunidades' },
  ];

  constructor() { }

  ngOnInit(): void { }

  showMenu(menu: string) {
    if (menu === 'nuestraUniversidad') {
      this.isMenuOpenNuestraUniversidad = true;
    } else if (menu === 'cultura') {
      this.isMenuOpenCultura = true;
    } else if (menu === 'investigacion') {
      this.isMenuOpenInvestigacion = true;
    } else if (menu === 'campus') {
      this.isMenuOpenCampus = true;
    } else if (menu === 'investigacionMenu') {
      this.isMenuOpenInvestigacionMenu = true;
    } else if (menu === 'directorio') {
      this.isMenuOpenDirectorio = true;
    } else if (menu === 'directorioDetail') {
      this.isMenuOpenDirectorioDetail = true;
    } else if (menu === 'ensenanza') {
      this.isMenuOpenEnsenanza = true;
    } else if (menu === 'licenciaturas') {  // Agregado para abrir el submenú "Licenciaturas"
      this.isMenuOpenLicenciaturas = true;
    } else if (menu === 'desarrollo') {  // Agregado para "Desarrollo"
      this.isMenuOpenDesarrollo = true;
    }
    if (this.closeMenuTimeout) {
      clearTimeout(this.closeMenuTimeout);
    }
  }

  startMenuCloseTimeout(menu: string) {
    this.closeMenuTimeout = setTimeout(() => {
      if (menu === 'nuestraUniversidad') {
        this.isMenuOpenNuestraUniversidad = false;
      } else if (menu === 'cultura') {
        this.isMenuOpenCultura = false;
      } else if (menu === 'investigacion') {
        this.isMenuOpenInvestigacion = false;
      } else if (menu === 'campus') {
        this.isMenuOpenCampus = false;
      } else if (menu === 'investigacionMenu') {
        this.isMenuOpenInvestigacionMenu = false;
      } else if (menu === 'directorio') {
        this.isMenuOpenDirectorio = false;
      } else if (menu === 'directorioDetail') {
        this.isMenuOpenDirectorioDetail = false;
      } else if (menu === 'ensenanza') {
        this.isMenuOpenEnsenanza = false;
      } else if (menu === 'licenciaturas') {  // Agregado para cerrar el submenú "Licenciaturas"
        this.isMenuOpenLicenciaturas = false;
      } else if (menu === 'desarrollo') {  // Agregado para "Desarrollo"
        this.isMenuOpenDesarrollo = false;
      }
    }, this.menuCloseDelay);
  }

  cancelMenuCloseTimeout(menu: string) {
    if (this.closeMenuTimeout) {
      clearTimeout(this.closeMenuTimeout);
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('nav')) {
      this.isMenuOpenNuestraUniversidad = false;
      this.isMenuOpenCultura = false;
      this.isMenuOpenInvestigacion = false;
      this.isMenuOpenCampus = false;
      this.isMenuOpenInvestigacionMenu = false;
      this.isMenuOpenDirectorio = false;
      this.isMenuOpenDirectorioDetail = false;
      this.isMenuOpenEnsenanza = false;
      this.isMenuOpenLicenciaturas = false;  // Agregado para cerrar el submenú "Licenciaturas"
      this.isMenuOpenDesarrollo = false;  // Agregado para cerrar "Desarrollo"
    }
  }
}
