import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctorado-en-electronica-opcion-sistemas-inteligentes',
  templateUrl: './doctorado-en-electronica-opcion-sistemas-inteligentes.component.html',
  styleUrls: ['./doctorado-en-electronica-opcion-sistemas-inteligentes.component.css']
})
export class DoctoradoEnElectronicaOpcionSistemasInteligentesComponent implements OnInit {

  panels: { title: string, content: string }[] = [];
  openIndex: number | null = null;
  constructor() { }

  ngOnInit(): void {
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
  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
  
  isOpen(index: number): boolean {
    return this.openIndex === index;
  }

}
