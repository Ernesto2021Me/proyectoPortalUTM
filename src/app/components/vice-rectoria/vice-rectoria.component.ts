import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vice-rectoria',
  templateUrl: './vice-rectoria.component.html',
  styleUrls: ['./vice-rectoria.component.css']
})
export class ViceRectoriaComponent implements OnInit {

  panels: { title: string, content: string }[] = [];
  openIndex: number | null = null;
  constructor() { }

  ngOnInit(): void {
    this.panels = [
      { title: 'VICE-RECTORIA ACADEMICA', content: 'Contenido del panel 1' },
      { title: 'VICE-RECTORIA DE ADMISION', content: 'Contenido del panel 2' },
      { title: 'VICE-RECTORIA DE RELACIONES Y RECURSOS| CIUDAD  DE MEXICO', content: 'Contenido del panel 3' },
  ];
  
  }
  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
  
  isOpen(index: number): boolean {
    return this.openIndex === index;
  }


}
