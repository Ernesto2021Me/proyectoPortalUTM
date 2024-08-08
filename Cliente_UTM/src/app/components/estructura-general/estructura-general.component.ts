import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructura-general',
  templateUrl: './estructura-general.component.html',
  styleUrls: ['./estructura-general.component.css']
})
export class EstructuraGeneralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  personalPanels = [
    { title: 'EL RECTOR', content: 'Es la suprema autoridad universitaria. Su principal objetivo es cuidar el cumplimiento de los fines de la Universidad a través de las atribuciones que posee. Dirigir y coordinar la realización de las funciones y actividades del quehacer académico y administrativo, así como las de servicios que promuevan al desarrollo de la región y el Estado de Oaxaca.', isOpen: false },
    { title: 'VICE-RECTOR(A) ACADÉMICO(A)', content: 'Es quien coordina y supervisa las actividades para la planeación, programación, desarrollo, control y evaluación de las funciones de docencia e investigación, así como actividades de difusión y promoción del desarrollo, conforme a lo establecido en la normatividad universitaria.', isOpen: false },
    { title: 'VICE-RECTOR(A) DE ADMINISTRACIÓN', content: 'Es el encargado de dirigir, coordinar y supervisar la administración de los recursos humanos, materiales y financieros, así como la prestación de servicios generales que sean necesarios, conforme a las normas y procedimientos establecidos en la legislación universitaria, para el desarrollo adecuado de las funciones institucionales.', isOpen: false },
    { title: 'VICE-RECTOR(A) DE RELACIONES & RECURSOS', content: '...', isOpen: false },
    { title: 'JEFES DE CARRERA', content: '...', isOpen: false },
    { title: 'DIRECTORES DE INSTITUTOS DE INVESTIGACIÓN', content: '...', isOpen: false },
    { title: 'FUNCIONARIOS UNIVERSITARIOS', content: '...', isOpen: false }
  ];

  colegiadosPanels = [
    { title: 'EL CONSEJO ACADEMICO', content: 'Con competencia presupuestaria y que también confirma los nombramientos definitivos y ascensos de profesores, los planes de estudio, etc.', isOpen: false },
    { title: 'EL CONSEJO ECONOMICO', content: 'Órgano de enlace entre la Universidad y la sociedad, que está formado por representantes de la propia Universidad, del gobierno del Estado y de la sociedad civil.', isOpen: false }
  ];

  toggle(panel: any, panels: any[]) {
    // Cierra todos los paneles
    panels.forEach(p => {
      if (p !== panel) {
        p.isOpen = false;
      }
    });
    // Alterna el panel actual
    panel.isOpen = !panel.isOpen;
  }
}
