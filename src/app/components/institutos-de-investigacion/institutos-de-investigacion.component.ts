import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institutos-de-investigacion',
  templateUrl: './institutos-de-investigacion.component.html',
  styleUrls: ['./institutos-de-investigacion.component.css']
})
export class InstitutosDeInvestigacionComponent implements OnInit {
  panels: { title: string, content: string }[] = [];
  openIndex: number | null = 0;
  

  constructor() { }

  ngOnInit(): void {
    this.panels = [
      { title: 'CAMPUS HUAJUAPAN DE LEON', content: 'Contenido del panel 1' },
      
    ];   
    
  }

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }

  isOpen(index: number): boolean {
    return this.openIndex === index;
  }

  
  campusPanel = {
    title: 'Campus Huajuapan de León',
    isOpen: false,
    institutos: [
      { nombre: 'Instituto de Computación', url: 'home/investigacion/institutos_de_investigacion/instituto_de_computacion' },
      { nombre: 'Instituto de Electrónica y Mecatrónica', url: 'home/investigacion/institutos_de_investigacion/instituto_de_electronica_y_mecatronica' },
      { nombre: 'Instituto de Diseño', url: 'home/investigacion/institutos_de_investigacion/instituto_de_diseno' },
      { nombre: 'Instituto de Física y Matemáticas', url: 'home/investigacion/institutos_de_investigacion/instituto_de_fisica_y_matematicas' },
      { nombre: 'Instituto de Ciencias Sociales y Humanidades', url: 'home/investigacion/institutos_de_investigacion/instituto_de_ciencias_sociales_y_humanidades' },
      { nombre: 'Instituto de Agroindustrias', url: 'home/investigacion/institutos_de_investigacion/instituto_de_agroindustrias' },
      { nombre: 'Instituto de Hidrología', url: 'home/investigacion/institutos_de_investigacion/instituto_de_hidrologia' },
      { nombre: 'Instituto de Minería', url: 'home/investigacion/institutos_de_investigacion/instituto_de_mineria' },
      { nombre: 'Instituto de Ingeniería Industrial y Automotriz', url: 'home/investigacion/institutos_de_investigacion/instituto_de_ingenieria_industrial_y_automotriz' },
      { nombre: 'Centro de Estudios de Nuevos Materiales', url: 'home/investigacion/institutos_de_investigacion/centro_de_estudios_de_muevos_materiales' },
    ]
  };
  


}
