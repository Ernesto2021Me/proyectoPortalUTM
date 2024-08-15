import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor() { }

  scrollToTop() {
    const scrollDuration = 500; // Duración del desplazamiento en milisegundos
    const scrollStep = -window.scrollY / (scrollDuration / 15); // Calcula el tamaño del paso

    const scrollInterval = setInterval(() => {
      if (window.scrollY <= 0) {
        clearInterval(scrollInterval); // Detiene el intervalo cuando llega a la parte superior
      } else {
        window.scrollBy(0, scrollStep); // Desplaza la ventana hacia arriba
      }
    }, 15); // Ejecuta cada 15 ms
  }
}
