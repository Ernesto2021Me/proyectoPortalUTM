import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingenieria-mecanica-automotriz',
  templateUrl: './ingenieria-mecanica-automotriz.component.html',
  styleUrls: ['./ingenieria-mecanica-automotriz.component.css']
})
export class IngenieriaMecanicaAutomotrizComponent implements OnInit {
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
          <table align="center" style="color: rgb(0, 0, 0); font-style: normal; font-weight: 400; text-align: start; white-space: normal; text-decoration: none; width: 100%;">
            <tbody>
              <tr>
                <td>
                  <div align="center">
                    <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                      <strong><font color="#410401">PRIMER SEMESTRE</font></strong>
                    </span>
                  </div>
                  <br />
                  <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                    <span style="background-color:#ffffff;">
                      <span style="display:inline !important;">
                        Cálculo Diferencial <br />
                        Química General <br />
                        Programación Estructurada <br />
                        Historia del Pensamiento Filosófico <br />
                        Taller Automotriz I
                      </span>
                    </span>
                  </span>
                </td>
                <td>
                  <div align="center">
                    <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                      <strong><font color="#410401">SEGUNDO SEMESTRE</font></strong>
                    </span>
                  </div>
                  <br />
                  <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                    <span style="background-color:#ffffff;">
                      <span style="display:inline !important;">
                        Cálculo Integral <br />
                        Álgebra Lineal <br />
                        Ingeniería de Materiales <br />
                        Teoría General de Sistemas <br />
                        Dibujo Asistido por computadora
                      </span>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div align="center">
                    <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                      <strong><font color="#410401">TERCER SEMESTRE</font></strong>
                    </span>
                  </div>
                  <br />
                  <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                    <span style="background-color:#ffffff;">
                      <span style="display:inline !important;">
                        Cálculo Vectorial <br />
                        Ecuaciones Diferenciales <br />
                        Estática <br />
                        Electromagnetismo <br />
                        Taller Automotriz II
                      </span>
                    </span>
                  </span>
                </td>
                <td>
                  <div align="center">
                    <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                      <strong><font color="#410401">CUARTO SEMESTRE</font></strong>
                    </span>
                  </div>
                  <br />
                  <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                    <span style="background-color:#ffffff;">
                      <span style="display:inline !important;">
                        Probabilidad y Estadística <br />
                        Métodos Numéricos <br />
                        Dinámica <br />
                        Mecánica de Materiales <br />
                        Circuitos Eléctricos
                      </span>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div align="center">
                    <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                      <strong><font color="#410401">QUINTO SEMESTRE</font></strong>
                    </span>
                  </div>
                  <br />
                  <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                    <span style="background-color:#ffffff;">
                      <span style="display:inline !important;">
                        Máquinas Eléctricas <br />
                        Mecanismos <br />
                        Termodinámica y Máquinas Térmicas <br />
                        Fundamentos de Electrónica <br />
                        Taller Automotriz III
                      </span>
                    </span>
                  </span>
                </td>
                <td>
                  <div align="center">
                    <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                      <strong><font color="#410401">SEXTO SEMESTRE</font></strong>
                    </span>
                  </div>
                  <br />
                  <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                    <span style="background-color:#ffffff;">
                      <span style="display:inline !important;">
                        Procesos de Manufactura <br />
                        Diseño de Elementos de Máquinas <br />
                        Mecánica de Fluidos y Máquinas Hidráulicas <br />
                        Análisis de Vibraciones Mecánicas <br />
                        Metrología y Transductores
                      </span>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div align="center">
                    <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                      <strong><font color="#410401">SÉPTIMO SEMESTRE</font></strong>
                    </span>
                  </div>
                  <br />
                  <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                    <span style="background-color:#ffffff;">
                      <span style="display:inline !important;">
                        Elemento Finito <br />
                        Diseño Asistido por Computadora <br />
                        Transferencia de Calor <br />
                        Electrónica de Potencia <br />
                        Microcontroladores
                      </span>
                    </span>
                  </span>
                </td>
                <td>
                  <div align="center">
                    <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                      <strong><font color="#410401">OCTAVO SEMESTRE</font></strong>
                    </span>
                  </div>
                  <br />
                  <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                    <span style="background-color:#ffffff;">
                      <span style="display:inline !important;">
                        Administración de Empresas Automotrices <br />
                        Manufactura Asistida por Computadora <br />
                        Máquinas de Combustión Interna <br />
                        Diseño de Herramentales <br />
                        Sistema Eléctrico Automotriz
                      </span>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div align="center">
                    <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                      <strong><font color="#410401">NOVENO SEMESTRE</font></strong>
                    </span>
                  </div>
                  <br />
                  <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                    <span style="background-color:#ffffff;">
                      <span style="display:inline !important;">
                        Ecología y Desarrollo Automotriz <br />
                        Sistema Mecánico Automotriz <br />
                        Sistema Electrónico Automotriz <br />
                        Optativa I <br />
                        Desarrollo de Proyectos Automotrices I
                      </span>
                    </span>
                  </span>
                </td>
                <td>
                  <div align="center">
                    <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                      <strong><font color="#410401">DÉCIMO SEMESTRE</font></strong>
                    </span>
                  </div>
                  <br />
                  <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                    <span style="background-color:#ffffff;">
                      <span style="display:inline !important;">
                        Administración del Trabajo Interdisciplinario <br />
                        Análisis Digital Automotriz <br />
                        Optativa II <br />
                        Optativa III <br />
                        Desarrollo de Proyectos Automotrices II
                      </span>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
               <tr>
                <td>
                  <div align="center">
                    <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                      <strong><font color="#410401">ESPECIALIDAD I</font></strong>
                    </span>
                  </div>
                  <br />
                  <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                    <span style="background-color:#ffffff;">
                      <span style="display:inline !important;">
                        Automatización Industrial <br />
                        Líneas de Ensamble Automotriz <br />
                        Control y Sistemas de Calidad
                      </span>
                    </span>
                  </span>
                </td>
                <td>
                  <div align="center">
                    <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                      <strong><font color="#410401">ESPECIALIDAD II</font></strong>
                    </span>
                  </div>
                  <br />
                  <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                    <span style="background-color:#ffffff;">
                      <span style="display:inline !important;">
                         Celdas de Combustible <br />
                        Motores Eléctricos Automotrices <br />
                        Tecnología Híbrida Automotriz
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


  
}
