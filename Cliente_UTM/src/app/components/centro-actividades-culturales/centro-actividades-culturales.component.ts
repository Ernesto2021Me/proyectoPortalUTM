import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centro-actividades-culturales',
  templateUrl: './centro-actividades-culturales.component.html',
  styleUrls: ['./centro-actividades-culturales.component.css']
})
export class CentroActividadesCulturalesComponent implements OnInit {
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
