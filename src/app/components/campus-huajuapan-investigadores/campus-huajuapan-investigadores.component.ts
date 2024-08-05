import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campus-huajuapan-investigadores',
  templateUrl: './campus-huajuapan-investigadores.component.html',
  styleUrls: ['./campus-huajuapan-investigadores.component.css']
})
export class CampusHuajuapanInvestigadoresComponent implements OnInit {
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
