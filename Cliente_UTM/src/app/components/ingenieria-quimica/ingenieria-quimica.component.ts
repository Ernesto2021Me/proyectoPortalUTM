import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingenieria-quimica',
  templateUrl: './ingenieria-quimica.component.html',
  styleUrls: ['./ingenieria-quimica.component.css']
})
export class IngenieriaQuimicaComponent implements OnInit {
  panels: { title: string, content: string }[] = [];
  openIndex: number | null = null;
  constructor() { }

  ngOnInit(): void {
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
  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
  
  isOpen(index: number): boolean {
    return this.openIndex === index;
  }

}
