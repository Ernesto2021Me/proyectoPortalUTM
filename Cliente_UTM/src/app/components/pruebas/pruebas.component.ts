// pruebas.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit, OnDestroy {
  images = [
    { src: '/assets/images/musica-3.jpg', alt: 'Imagen 1' },
    { src: '/assets/images/cul_.jpeg', alt: 'Imagen 2' },
    { src: '/assets/images/images.jpeg', alt: 'Imagen 3' }
    // Agrega más imágenes según sea necesario
  ];
  currentIndex = 0;
  itemWidth: number;
  translateValue: string;
  interval: any;

  constructor() {
    this.itemWidth = 100; // Ajusta según el ancho de tus imágenes y diseño
    this.translateValue = `-${this.currentIndex * this.itemWidth}%`;
  }

  ngOnInit(): void {
    // Iniciar la transición automática cada 3 segundos (3000 milisegundos)
    this.interval = setInterval(() => {
      this.nextImage();
    }, 3000); // Cambia este valor para ajustar el intervalo de tiempo entre transiciones
  }

  ngOnDestroy(): void {
    // Limpiar el intervalo cuando el componente se destruye para evitar fugas de memoria
    clearInterval(this.interval);
  }

  changeImage(index: number) {
    this.currentIndex = index;
    this.updateTranslateValue();
  }

  updateTranslateValue() {
    this.translateValue = `-${this.currentIndex * this.itemWidth}%`;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateTranslateValue();
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateTranslateValue();
  }
}
