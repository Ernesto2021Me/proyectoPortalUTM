import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios-escolares',
  templateUrl: './servicios-escolares.component.html',
  styleUrls: ['./servicios-escolares.component.css']
})
export class ServiciosEscolaresComponent implements OnInit {
  panels: { title: string, content: string }[] = [];
 
  openIndex: number | null = 0;
  
  constructor() { }

  ngOnInit(): void {
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

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }

  isOpen(index: number): boolean {
    return this.openIndex === index;
  }

 }