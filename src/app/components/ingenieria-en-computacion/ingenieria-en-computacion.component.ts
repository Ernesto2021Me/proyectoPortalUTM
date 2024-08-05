import { Component } from '@angular/core';

@Component({
  selector: 'app-ingenieria-en-computacion',
  templateUrl: './ingenieria-en-computacion.component.html',
  styleUrls: ['./ingenieria-en-computacion.component.css']
})
export class IngenieriaEnComputacionComponent {
  accordionPanels = [
    { 
      title: 'JEFATURA DE CARRERA', 
      content: `
        <div class="jefatura-carrera-content">
          <p>M.C. Enrique Alejandro López</p>
          <p><a href="mailto:jccomputacion@mixteco.utm.mx">jccomputacion@mixteco.utm.mx</a></p>
        </div>
      `, 
      isOpen: false 
    },
    { 
      title: 'MISIÓN', 
      content: `
        <div class="mision-content">
          <p>La misión de la Ingeniería en Computación es formar profesionistas capaces de analizar, diseñar, desarrollar, implementar y mantener sistemas de información, con un enfoque ético y de responsabilidad social, preparados para enfrentar los retos tecnológicos del futuro.</p>
        </div>
      `, 
      isOpen: false 
    },
    { 
      title: 'VISIÓN', 
      content: `...
      `, 
      isOpen: false 
    },
    { 
      title: 'OBJETIVO', 
      content: `....
      `, 
      isOpen: false 
    },
    { 
      title: 'PERFIL DE INGRESO', 
      content: `
        <div class="perfil-ingreso-content">
          <p><strong>Conocimientos:</strong></p>
          <ul>
            <li>Bachillerato terminado, preferentemente con especialidad en informática o en el área de Físico-Matemáticas.</li>
          </ul>
          <p><strong>Habilidades para:</strong></p>
          <ul>
            <li>Aptitudes para analizar y proponer soluciones prácticas a problemas lógicos y matemáticos.</li>
            <li>Habilidad en la planeación y realización de tareas individuales y colectivas.</li>
          </ul>
          <p><strong>Actitudes y valores:</strong></p>
          <ul>
            <li>Compromiso, disciplina y constancia.</li>
          </ul>
        </div>
      `, 
      isOpen: false 
    },
    { 
      title: 'PERFIL DE EGRESO', 
      content: `
        <div class="perfil-egreso-content">
          <p><strong>Los egresados de la Ingeniería en Computación son profesionistas con las siguientes características:</strong></p>
          <p><strong>Conocimientos:</strong></p>
          <ul>
            <li>Formación sólida en matemáticas, teoría de la computación, programación de sistemas, paradigmas de programación, redes de computadoras y sistemas de gestión de bases de datos.</li>
            <li>Conocimientos en inteligencia artificial e ingeniería de software, con la capacidad de especializarse en alguna de estas áreas.</li>
          </ul>
          <p><strong>Habilidades para:</strong></p>
          <ul>
            <li>Realizar trabajo en equipo y liderar proyectos de manera efectiva.</li>
            <li>Desarrollar habilidades para estudios de posgrado, incorporación al sector productivo o la creación de su propia empresa.</li>
          </ul>
          <p><strong>Actitudes y valores:</strong></p>
          <ul>
            <li>Ser un profesional responsable, solidario, ético y comprometido con la sociedad y el medio ambiente.</li>
          </ul>
          <p>El Ingeniero en Computación egresado tiene los conocimientos y aptitudes necesarias para laborar en el sector público o privado, en lugares donde se requieran sistemas de cómputo o donde pueda aplicar su capacidad de análisis y abstracción para resolver problemas de ingeniería.</p>
          <p>Además, el ingeniero en computación está capacitado para desempeñarse en instituciones dedicadas a la docencia o a la investigación, y para continuar con estudios de posgrado en áreas afines.</p>
          <p>En el sector laboral, hay una gran demanda de Ingenieros en Computación, debido al notable incremento de las TI en prácticamente todos los sectores productivos. Nuestros egresados están capacitados en el uso de paquetes de uso comercial y científico, así como en la metodología y desarrollo de aplicaciones usando una variedad de lenguajes de programación.</p>
        </div>
      `, 
      isOpen: false 
    },
    { 
      title: 'CAMPO DE ACCIÓN', 
      content: `
        <div class="campo-de-accion-content">
          <p>Las principales áreas en que interviene el profesionista en Ingeniería en Computación son:</p>
          <ul>
            <li><strong>Análisis de Sistemas:</strong> Planificación, análisis y diseño de sistemas de información.</li>
            <li><strong>Auditoría Informática:</strong> Asesoramiento a las empresas sobre sus problemas informáticos, proponiendo soluciones que agilicen o mejoren su funcionamiento.</li>
          </ul>
        </div>
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
                        Programación Estructurada <br />
                        Precálculo <br />
                        Química General para Ingeniería <br />
                        Física para Ingeniería <br />
                        Historia del Pensamiento Filosófico
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
                        Programación Orientada a Objetos <br />
                        Cálculo Integral para Ingeniería <br />
                        Teoría de la Computación <br />
                        Diseño Digital <br />
                        Matemáticas Discretas
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
                        Ingeniería de Software <br />
                        Métodos Numéricos <br />
                        Compiladores <br />
                        Arquitectura y Organización de Computadoras <br />
                        Programación Web I
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
                        Interacción Humano-Computadora <br />
                        Probabilidad y Estadística <br />
                        Redes de Computadoras II <br />
                        Administración y Dirección Empresarial <br />
                        Programación Funcional
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
                        Optativa I <br />
                        Optativa II <br />
                        Administración de Redes <br />
                        Desarrollo de Videojuegos <br />
                        Investigación de Operaciones
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
  toggle(panel: any, panels: any[]) {
    panel.isOpen = !panel.isOpen;
    if (!panel.isOpen) {
      panels.forEach(p => {
        if (p !== panel) {
          p.isOpen = false;
        }
      });
    }
  }
}
