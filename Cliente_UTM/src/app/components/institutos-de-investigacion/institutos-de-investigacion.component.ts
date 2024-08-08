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


}
