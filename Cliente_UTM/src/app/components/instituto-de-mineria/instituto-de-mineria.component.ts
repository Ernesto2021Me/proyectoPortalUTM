import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { InstitutosService } from 'src/app/services/institutos.service';
import {Router} from '@angular/router'
import { Instituto_informacion_general } from 'src/app/models/Informacion_general_institutos';
import { Instituto } from 'src/app/models/institutos';
@Component({
  selector: 'app-instituto-de-mineria',
  templateUrl: './instituto-de-mineria.component.html',
  styleUrls: ['./instituto-de-mineria.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InstitutoDeMineriaComponent implements OnInit {
  institutos: Instituto[]=[]
  instituto_informacion=new Instituto_informacion_general();
  urlMapping: { [key: string]: string } = {
    'Instituto de Computación': '/home/investigacion/institutos_de_investigacion/instituto_de_computacion',
    'Instituto de Electrónica y Mecatrónica': '/home/investigacion/institutos_de_investigacion/instituto_de_electronica_y_mecatronica',
    'Instituto de Diseño': '/home/investigacion/institutos_de_investigacion/instituto_de_diseno',
    'Instituto de Física y Matemáticas': '/home/investigacion/institutos_de_investigacion/instituto_de_fisica_y_matematicas',
    'Instituto de Ciencias Sociales y Humanidades': '/home/investigacion/institutos_de_investigacion/instituto_de_ciencias_sociales_y_humanidades',
    'Instituto de Agroindustrias': '/home/investigacion/institutos_de_investigacion/instituto_de_agroindustrias',
    'Instituto de Hidrología': '/home/investigacion/institutos_de_investigacion/instituto_de_hidrologia',
    'Instituto de Minería': '/home/investigacion/institutos_de_investigacion/instituto_de_mineria',
    'Instituto de Ingeniería Industrial y Automotriz': '/home/investigacion/institutos_de_investigacion/instituto_de_ingenieria_industrial_y_automotriz',
    'Centro de Estudios de Nuevos Materiales': '/home/investigacion/institutos_de_investigacion/centro_de_estudios_de_muevos_materiales',
  
  };
  constructor(private InstitutosService: InstitutosService, private router: Router) {}

  ngOnInit(): void {
    this.loadData();
  
  }
  
  loadData(){
    this.loadInstitutos();
    this.loadInstitutos_informacion();
  }

  private loadInstitutos(){
    this.InstitutosService.list_institutos_investigacion( ).subscribe(
      (res: any) =>
        this.institutos= res,
      (err) => console.error(err)
    );
  }

  private loadInstitutos_informacion(){
    this.InstitutosService.informacion_general_instituto('010' ).subscribe(
      (res: any) =>
        this.instituto_informacion= res[0],
      (err) => console.error(err)
    );
  }

  navigateTo(nombre_direccion: string): void {
    const url = this.urlMapping[nombre_direccion];
    if (url) {
      if (nombre_direccion === 'Licenciatura en Estudios Mexicanos' || nombre_direccion === 'Maestría en Ciencia de Datos') {
        window.location.href = url;
      } else {
        window.location.href = url;
      }
    } else {
      console.error('URL no encontrada para el nombre de carrera:', nombre_direccion);
    }
     }

     formatText(text: string): string {
      let lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
      if (lines.length > 0) {
          let paragraphs = lines.slice(0, 5).map(line => `<p>${line}</p>`).join('');
          let listItems = lines.slice(5, -1).map(line => `<li>${line}</li>`).join('');
          let lastParagraph = lines.length > 3 ? `<p>${lines[lines.length - 1]}</p>` : '';
          let list = listItems ? `<ul class="reduce-spacing">${listItems}</ul>` : '';
          return `${paragraphs}${list}${lastParagraph}`;
      }
      
      return '';
  }

  formatText_2(text: string): string {
    let lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    let listItems = lines.map(line => `<li>${line}</li>`).join('');
    return `<ul class="reduce-spacing">${listItems}</ul>`;
  }
  
    formatText_3(text: string): string {
      let lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
      if (lines.length > 0) {
        let firstParagraph = `<p>${lines[0]}</p>`;
        let listItems = lines.slice(1).map(line => `<li>${line}</li>`).join('');
        let list = `<ul class="reduce-spacing">${listItems}</ul>`;
        return `${firstParagraph}${list}`;
      }
      return '';
    }
}