import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectoria',
  templateUrl: './rectoria.component.html',
  styleUrls: ['./rectoria.component.css']
})
export class RectoriaComponent implements OnInit {
  panels: { title: string, content: string }[] = [];
  openIndex: number | null = 0;
  constructor() { }

  ngOnInit(): void {
    this.panels = [
      { title: 'RECTOR FUNDADOR', content: 'Contenido del panel 1' },
      { title: 'RECTORA', content: 'Contenido del panel 2' },
      { title: 'SECRETARIA PARTICULAR DE RECTORIA|CAMPUS HUAJUAPAN DE LEON', content: 'Contenido del panel 3' },
      { title: 'ABOGADO GENERAL', content: 'Contenido del panel 4' },
      { title: 'JEFATURA DEL DEPARTAMENTO DE AUDITORIA INTERNA', content: 'Contenido del panel 5' },
      { title: 'COORDINACION DE PROMOCION DEL DESARROLLO', content: 'Contenido del panel 6' },
      { title: 'COORDINACION DE ACTIVIDADES CULTURALES', content: 'Contenido del panel 7' },
      { title: 'COORDINACION DE INVESTIGACION', content: 'Contenido del panel 8' }
  ];
  
  }
  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
  
  isOpen(index: number): boolean {
    return this.openIndex === index;
  }


}
