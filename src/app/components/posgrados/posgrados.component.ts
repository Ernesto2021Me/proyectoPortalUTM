import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posgrados',
  templateUrl: './posgrados.component.html',
  styleUrls: ['./posgrados.component.css']
})
export class PosgradosComponent implements OnInit {
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
