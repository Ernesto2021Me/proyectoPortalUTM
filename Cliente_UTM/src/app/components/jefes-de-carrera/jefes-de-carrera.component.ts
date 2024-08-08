import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jefes-de-carrera',
  templateUrl: './jefes-de-carrera.component.html',
  styleUrls: ['./jefes-de-carrera.component.css']
})
export class JefesDeCarreraComponent implements OnInit {
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
      { title: 'INGENIERÍA EN COMPUTACIÓN', content: 'Contenido del Instituto de Computación' },
      { title: 'INGENIERÍA EN ELECTRÓNICA', content: 'Contenido del Instituto de Electrónica y Mecatrónica' },
      { title: 'INGENIERÍA EN DISEÑO', content: 'Contenido del Instituto de Diseño' },
      { title: 'INGENIERÍA EN MECATRÓNICA', content: 'Contenido del Instituto de Mecatrónica' },
      { title: 'LICENCIATURA EN MATEMÁTICAS APLICADAS', content: 'Contenido del Instituto de Matemáticas Aplicadas' },
      { title: 'LICENCIATURA EN CIENCIAS EMPRESARIALES', content: 'Contenido del Instituto de Ciencias Empresariales' },
      { title: 'INGENIERÍA EN ALIMENTOS', content: 'Contenido del Instituto de Agroindustrias' },
      { title: 'INGENIERÍA EN FÍSICA APLICADA', content: 'Contenido del Instituto de Física Aplicada' },
      { title: 'INGENIERÍA INDUSTRIAL', content: 'Contenido del Instituto Industrial' },
      { title: 'INGENIERÍA EN MECÁNICA AUTOMOTRIZ', content: 'Contenido del Instituto de Mecánica Automotriz' },
      { title: 'INGENIERÍA CIVIL', content: 'Contenido del Instituto Civil' },
      { title: 'INGENIERÍA QUÍMICA EN PROCESOS SOSTENIBLES', content: 'Contenido del Instituto de Química en Procesos Sostenibles' }
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
