import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesores-investigadores',
  templateUrl: './profesores-investigadores.component.html',
  styleUrls: ['./profesores-investigadores.component.css']
})
export class ProfesoresInvestigadoresComponent implements OnInit {
  panels: { title: string, content: string }[] = [];
  openIndex: number | null = 0;
  

  constructor() { }

  ngOnInit(): void {
    this.panels = [
      { title: 'HUAJUAPAN DE LEON', content: 'Contenido del panel 1' },
      
    ];   
    
  }

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }

  isOpen(index: number): boolean {
    return this.openIndex === index;
  }


}
