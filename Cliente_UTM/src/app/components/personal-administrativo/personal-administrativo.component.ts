import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-administrativo',
  templateUrl: './personal-administrativo.component.html',
  styleUrls: ['./personal-administrativo.component.css']
})
export class PersonalAdministrativoComponent implements OnInit {
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
      { title: 'DEPARTAMENTO DE SERVICIOS ESCOLARES', content: 'Contenido del Instituto de Computación' },
      { title: 'DIRECCION DE LA REVISTA "TEMAS DE CIENCIA Y TECNOLOGÍA"', content: 'Contenido del Instituto de Electrónica y Mecatrónica' },
      { title: 'COORDINACION DE SEMINARIOS DE INVESTIGACIÓN', content: 'Contenido del Instituto de Diseño' },
      { title: 'COORDINACION DE LA UNIVERSIDAD VIRTUAL', content: 'Contenido del Instituto de Mecatrónica' },
      { title: 'JEFATURA DE BIBLIOTECA', content: 'Contenido del Instituto de Matemáticas Aplicadas' },
      { title: 'DEPARTAMENTO DE RECURSOS HUMANOS', content: 'Contenido del Instituto de Ciencias Empresariales' },
      { title: 'DEPARTAMENTO DE RECURSOS MATERIALES', content: 'Contenido del Instituto de Agroindustrias' },
      { title: 'DEPARTAMENTO DE RECURSOS FINANCIEROS', content: 'Contenido del Instituto de Física Aplicada' },
      { title: 'DEPARTAMENTO DE RED DE CÓMPUTO', content: 'Contenido del Instituto Industrial' },
      { title: 'JEFATURA DEL ARCHIVO HISTÓRICO DE LA MINERÍA EN OAXACA', content: 'Contenido del Instituto de Mecánica Automotriz' },
      { title: 'DEPARTAMENTO DE GESTIÓN ADMINISTRATIVA', content: 'Contenido del Instituto Civil' },
      { title: 'DEPARTAMENTO DE PROYECTOS, CONSTRUCCIÓN Y MANTENIMIENTO', content: 'Contenido del Instituto de Química en Procesos Sostenibles' }
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
