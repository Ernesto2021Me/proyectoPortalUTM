import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division-de-estudios-de-posgrado',
  templateUrl: './division-de-estudios-de-posgrado.component.html',
  styleUrls: ['./division-de-estudios-de-posgrado.component.css']
})
export class DivisionDeEstudiosDePosgradoComponent implements OnInit {

  panels: { title: string, content: string }[] = [];
  openIndex: number | null = 0;
  constructor() { }

  ngOnInit(): void {
    this.panels = [
      { title: 'DIRECCION', content: 'Contenido del panel 1' },
  ];
  
  }
  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
  
  isOpen(index: number): boolean {
    return this.openIndex === index;
  }

}
