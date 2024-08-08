import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directores-de-instituto',
  templateUrl: './directores-de-instituto.component.html',
  styleUrls: ['./directores-de-instituto.component.css']
})
export class DirectoresDeInstitutoComponent implements OnInit {
  panels: { title: string, content: string }[] = [];
  panels2: { title: string, content: string }[] = [];
  openIndex: number | null = null;
  openIndex2: number | null = null;

  constructor() { }

  ngOnInit(): void {
    this.panels = [
      { title: 'CAMPUS HUAJUAPAN DE LEON', content: 'Contenido del panel 1' },
      
    ];

    this.panels2 = [
      { title: 'INSTITUTO DE COMPUTACIÓN', content: 'Contenido del Instituto de Computación' },
      { title: 'INSTITUTO DE DISEÑO', content: 'Contenido del Instituto de Diseño' },
      { title: 'INSTITUTO DE CIENCIAS SOCIALES Y HUMANIDADES', content: 'Contenido del Instituto de Ciencias Sociales y Humanidades' },
      { title: 'INSTITUTO DE FÍSICA Y MATEMÁTICAS', content: 'Contenido del Instituto de Física y Matemáticas' },
      { title: 'INSTITUTO DE HIDROLOGÍA', content: 'Contenido del Instituto de Hidrología' },
      { title: 'INSTITUTO DE MINERÍA', content: 'Contenido del Instituto de Minería' },
      { title: 'INSTITUTO DE ELECTRÓNICA Y MECATRÓNICA', content: 'Contenido del Instituto de Electrónica y Mecatrónica' },
      { title: 'INSTITUTO DE AGROINDUSTRIAS', content: 'Contenido del Instituto de Agroindustrias' },
      { title: 'INSTITUTO DE INGENIERÍA INDUSTRIAL Y AUTOMOTRÍZ', content: 'Contenido del Instituto de Ingeniería Industrial y Automotríz' },
      { title: 'CENTRO DE IDIOMAS', content: 'Contenido del Centro de Idiomas' },
      { title: 'CENTRO DE MODELACIÓN MATEMÁTICA', content: 'Contenido del Centro de Modelación Matemática' },
      { title: 'CENTRO DE ESTUDIOS ESTRATÉGICOS DE LA EMPRESA', content: 'Contenido del Centro de Estudios Estratégicos de la Empresa' }
    ];
    
  }

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }

  isOpen(index: number): boolean {
    return this.openIndex === index;
  }

  toggle2(index: number): void {
    this.openIndex2 = this.openIndex2 === index ? null : index;
  }

  isOpen2(index: number): boolean {
    return this.openIndex2 === index;
  }

}
