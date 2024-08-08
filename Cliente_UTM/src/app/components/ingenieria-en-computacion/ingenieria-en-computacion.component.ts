import { Component } from '@angular/core';

@Component({
  selector: 'app-ingenieria-en-computacion',
  templateUrl: './ingenieria-en-computacion.component.html',
  styleUrls: ['./ingenieria-en-computacion.component.css']
})
export class IngenieriaEnComputacionComponent {
  panels: { title: string, content: string }[] = [];
  openIndex: number | null = null;
  constructor() { }

  ngOnInit(): void {
    this.panels = [
      { title: 'JEFATURA DE CARRERA', content: 'Contenido del panel 1' },
      { title: 'MISIÓN', content: 'Contenido del panel 2' },
      { title: 'VISIÓN', content: 'Contenido del panel 3' },
      { title: 'OBJETIVO', content: 'Contenido del panel 4' },
      { title: 'PERFIL DE INGRESO', content: 'Contenido del panel 5' },
      { title: 'PERFIL DE EGRESO', content: 'Contenido del panel 6' },
      { title: 'CAMPO DE ACCIÓN', content: 'Contenido del panel 7' },
      { title: 'PLAN DE ESTUDIOS', content: 'Contenido del panel 8' },
  ];
  
  }
  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
  
  isOpen(index: number): boolean {
    return this.openIndex === index;
  }

  accordionPanels = [
    
    { 
      title: 'PERFIL DE INGRESO', 
      content: `
      `, 
      isOpen: false 
    },
    { 
      title: 'PERFIL DE EGRESO', 
      content: `
        
      `, 
      isOpen: false 
    },
    { 
      title: 'CAMPO DE ACCIÓN', 
      content: `
        
      `, 
      isOpen: false 
    },
    { 
      title: 'PLAN DE ESTUDIOS', 
      content: `
       <div class="plan-de-estudios-content">
  <table align="center" style="color: rgb(0, 0, 0); font-style: normal; font-weight: 400; text-align: start; white-space: normal; text-decoration: none; width: 100%; border-collapse: collapse; border: 1px solid #d3d3d3;">
    <tbody>
      <tr>
        <td style="border: 1px solid #d3d3d3; padding: 10px;">
          <div align="center">
            <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
              <strong><font color="#410401">PRIMER SEMESTRE</font></strong>
            </span>
          </div>
          <br />
          <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
            <span style="background-color:#ffffff;">
              <span style="display:inline !important;">
                Programación Estructurada <br />
                Precálculo <br />
                Química General para Ingeniería <br />
                Física para Ingeniería <br />
                Historia del Pensamiento Filosófico
              </span>
            </span>
          </span>
        </td>
        <td style="border: 1px solid #d3d3d3; padding: 10px;">
          <div align="center">
            <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
              <strong><font color="#410401">SEGUNDO SEMESTRE</font></strong>
            </span>
          </div>
          <br />
          <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
            <span style="background-color:#ffffff;">
              <span style="display:inline !important;">
                Estructuras de Datos <br />
                Cálculo Diferencial para Ingeniería <br />
                Álgebra Lineal para Ingeniería <br />
                Principios de Electrónica Analógica <br />
                Teoría General de Sistemas
              </span>
            </span>
          </span>
        </td>
      </tr>
      <tr>
        <td style="border: 1px solid #d3d3d3; padding: 10px;">
          <div align="center">
            <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
              <strong><font color="#410401">TERCER SEMESTRE</font></strong>
            </span>
          </div>
          <br />
          <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
            <span style="background-color:#ffffff;">
              <span style="display:inline !important;">
                Programación Orientada a Objetos <br />
                Cálculo Integral para Ingeniería <br />
                Teoría de la Computación <br />
                Diseño Digital <br />
                Matemáticas Discretas
              </span>
            </span>
          </span>
        </td>
        <td style="border: 1px solid #d3d3d3; padding: 10px;">
          <div align="center">
            <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
              <strong><font color="#410401">CUARTO SEMESTRE</font></strong>
            </span>
          </div>
          <br />
          <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
            <span style="background-color:#ffffff;">
              <span style="display:inline !important;">
                Análisis de Algoritmos <br />
                Ecuaciones Diferenciales <br />
                Lenguaje Ensamblador <br />
                Cómputo Reconfigurable <br />
                Bases de Datos
              </span>
            </span>
          </span>
        </td>
      </tr>
      <tr>
        <td style="border: 1px solid #d3d3d3; padding: 10px;">
          <div align="center">
            <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
              <strong><font color="#410401">QUINTO SEMESTRE</font></strong>
            </span>
          </div>
          <br />
          <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
            <span style="background-color:#ffffff;">
              <span style="display:inline !important;">
                Ingeniería de Software <br />
                Métodos Numéricos <br />
                Compiladores <br />
                Arquitectura y Organización de Computadoras <br />
                Programación Web I
              </span>
            </span>
          </span>
        </td>
        <td style="border: 1px solid #d3d3d3; padding: 10px;">
          <div align="center">
            <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
              <strong><font color="#410401">SEXTO SEMESTRE</font></strong>
            </span>
          </div>
          <br />
          <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
            <span style="background-color:#ffffff;">
              <span style="display:inline !important;">
                Desarrollo de Software Orientado a Objetos <br />
                Sistemas Operativos <br />
                Redes de Computadoras I <br />
                Sistemas Embebidos <br />
                Programación Web II
              </span>
            </span>
          </span>
        </td>
      </tr>
      <tr>
        <td style="border: 1px solid #d3d3d3; padding: 10px;">
          <div align="center">
            <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
              <strong><font color="#410401">SÉPTIMO SEMESTRE</font></strong>
            </span>
          </div>
          <br />
          <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
            <span style="background-color:#ffffff;">
              <span style="display:inline !important;">
                Interacción Humano-Computadora <br />
                Probabilidad y Estadística <br />
                Redes de Computadoras II <br />
                Administración y Dirección Empresarial <br />
                Programación Funcional
              </span>
            </span>
          </span>
        </td>
        <td style="border: 1px solid #d3d3d3; padding: 10px;">
          <div align="center">
            <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
              <strong><font color="#410401">OCTAVO SEMESTRE</font></strong>
            </span>
          </div>
          <br />
          <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
            <span style="background-color:#ffffff;">
              <span style="display:inline !important;">
                Desarrollo Ágil de Software <br />
                Desarrollo de Aplicaciones para Dispositivos Móviles <br />
                Sistemas de Cómputo Paralelo y Distribuido <br />
                Mercadotecnia <br />
                Inteligencia Artificial
              </span>
            </span>
          </span>
        </td>
      </tr>
      <tr>
        <td style="border: 1px solid #d3d3d3; padding: 10px;">
          <div align="center">
            <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
              <strong><font color="#410401">NOVENO SEMESTRE</font></strong>
            </span>
          </div>
          <br />
          <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
            <span style="background-color:#ffffff;">
              <span style="display:inline !important;">
                Optativa I <br />
                Optativa II <br />
                Administración de Redes <br />
                Desarrollo de Videojuegos <br />
                Investigación de Operaciones
              </span>
            </span>
          </span>
        </td>
        <td style="border: 1px solid #d3d3d3; padding: 10px;">
          <div align="center">
            <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
              <strong><font color="#410401">DÉCIMO SEMESTRE</font></strong>
            </span>
          </div>
          <br />
          <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
            <span style="background-color:#ffffff;">
              <span style="display:inline !important;">
                Optativa III <br />
                Optativa IV <br />
                Formulación y Evaluación de Proyectos <br />
                Metodología de la Investigación <br />
                Ética y Profesionalismo
              </span>
            </span>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

      `, 
      isOpen: false 
    }
  ];


  isModalOpen = false; // Variable para controlar el estado del modal

  // Método para abrir el modal
  openModal() {
    this.isModalOpen = true;
  }

  // Método para cerrar el modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Método para manejar la apertura y cierre de los paneles del acordeón
  
}
