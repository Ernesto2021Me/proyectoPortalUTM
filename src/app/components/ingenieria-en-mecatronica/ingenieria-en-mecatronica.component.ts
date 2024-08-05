import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingenieria-en-mecatronica',
  templateUrl: './ingenieria-en-mecatronica.component.html',
  styleUrls: ['./ingenieria-en-mecatronica.component.css']
})
export class IngenieriaEnMecatronicaComponent implements OnInit {

  accordionPanels = [
    {
      title: 'JEFATURA DE CARRERA',
      content: `
        <div class="jefatura-carrera">
          <p>Dr. Esther Lugo</p>
          <p><a href="mailto:jcmecatronica@mixteco.utm.mx">jcmecatronica@mixteco.utm.mx</a></p>
        </div>
      `,
      isOpen: false
    },
    { 
      title: 'MISIÓN', 
      content: `
       ...
      `, 
      isOpen: false 
    },
    { 
      title: 'VISIÓN', 
      content: `
      ...
      `, 
      isOpen: false 
    },
    { 
      title: 'OBJETIVO', 
      content: `
        ...
      `, 
      isOpen: false 
    },
    { 
      title: 'PERFIL DE INGRESO', 
      content: `
        <div class="perfil-ingreso-content">
          <p><strong>El aspirante a la carrera de Ingeniería en Mecatrónica de la UTM, debe poseer:</strong></p>
          <p><strong>Conocimientos:</strong></p>
          <ul>
            <li>Básicos en física, matemáticas y computación.</li>
          </ul>
          <p><strong>Habilidades:</strong></p>
          <ul>
            <li>Creatividad y capacidad analítica.</li>
            <li>Autodidactismo.</li>
            <li>Gusto por las aplicaciones ingenieriles.</li>
            <li>Trabajo en equipo.</li>
          </ul>
        </div>
      `, 
      isOpen: false 
    },    
    { 
      title: 'PERFIL DE EGRESO', 
      content: `
        <div class="perfil-egreso-content">
          <p><strong>El egresado en Ingeniería en Mecatrónica de la UTM, será un profesionista con conocimientos en las áreas de ingeniería mecánica, electrónica, de control y computación, capaz de automatizar procesos, diseñar sistemas mecatrónicos, aplicar herramientas computacionales especializadas, dirigir grupos de trabajo, continuar con estudios de posgrado, así como crear, innovar y adaptar tecnologías con conciencia ambiental y ética profesional que contribuya al desarrollo del país.</strong></p>
          
          <p><strong>Conocimientos:</strong></p>
          <ul>
            <li>Ciencias básicas, mecánica, electrónica, control y computación para el análisis y desarrollo de productos y Sistemas Mecatrónicos.</li>
          </ul>
          
          <p><strong>Habilidades:</strong></p>
          <ul>
            <li>Capacidad para comprender problemas y presentar alternativas de solución mediante el uso de recursos tecnológicos.</li>
            <li>Innovación, mejora y adaptación de la tecnología en proyectos mecatrónicos.</li>
          </ul>
          
          <p><strong>Valores:</strong></p>
          <ul>
            <li>Ética profesional y toma de decisiones que favorezcan condiciones dignas de trabajo, salud y seguridad para las personas.</li>
            <li>Conciencia del entorno ecológico y responsabilidad ambiental.</li>
          </ul>
        </div>
      `, 
      isOpen: false 
    },    
    { 
      title: 'CAMPO DE ACCIÓN', 
      content: `
        <div class="campo-de-accion-content">
          <p>El Ingeniero en Mecatrónica puede:</p>
          <ul>
            <li>Incorporarse con alta competitividad a instituciones o empresas, públicas o privadas, para diseñar, innovar o adaptar tecnologías emergentes.</li>
            <li>Especializarse en áreas como automotriz, bioingeniería, manufactura industrial, robótica, electromecánica y automatización de sistemas industriales.</li>
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
                        Cálculo Diferencial e Integral <br />
                        Dibujo Asistido por Computadora <br />
                        Historia del Pensamiento Filosófico <br />
                        Expresión oral y escrita <br />
                        Programación estructurada
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
                        Cálculo Vectorial <br />
                        Fundamentos de Probabilidad y Estadística <br />
                        Teoría General de Sistemas <br />
                        Álgebra Lineal <br />
                        Programación Orientada a Objetos
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
                        Ecuaciones Diferenciales <br />
                        Métodos Numéricos <br />
                        Estática <br />
                        Ingeniería de Materiales <br />
                        Electro - Magnetismo
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
                        Métodos matemáticos para Ingeniería <br />
                        Dinámica <br />
                        Mecánica de Materiales <br />
                        Procesos de Manufactura <br />
                        Circuitos Eléctricos I
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
                        Metrología y Transductores <br />
                        Mecanismos <br />
                        Electrónica Digital <br />
                        Circuitos Eléctricos II <br />
                        Electrónica Analógica
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
                        Modelado y Simulación de Sistemas Dinámicos <br />
                        Diseño de Elementos de Máquinas <br />
                        Circuitos Digitales Reconfigurables <br />
                        Mecánica de Fluidos <br />
                        Electrónica de Potencia
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
                        Control Clásico <br />
                        Micro - Controladores <br />
                        Máquinas Eléctricas <br />
                        Neumática e Hidráulica <br />
                        Termodinámica y Transferencia de Calor
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
                        Control Moderno <br />
                        Procesamiento Digital de Señales <br />
                        Diseño Mecatrónico <br />
                        Autómatas Programables <br />
                        Robótica de Manipuladores
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
                        Seminario de Investigación <br />
                        Optativa I <br />
                        Proyecto Integrador de Ingeniería Mecatrónica <br />
                        Optativa II <br />
                        Administración para Ingenieros
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
                        Ecología y Desarrollo Sostenible <br />
                        Manufactura Avanzada <br />
                        Optativa III <br />
                        Formulación y Evaluación de Proyectos <br />
                        Optativa IV
                      </span>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div align="center">
                    <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                      <strong><font color="#410401">Optativas según especialidad</font></strong>
                    </span>
                  </div>
                  <br />
                  <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                    <span style="background-color:#ffffff;">
                      <span style="display:inline !important;">
                        <strong>Optativa I</strong> <br />
                        Control Avanzado <br />
                        Elementos Finitos Aplicados a la Ingenieria<br />
                        Fundamentos de Inteligencia Artificial<br />
                        <strong>Optativa II</strong> <br />
                        Control de Máquinas de CD Mediante Convertidores CD-CD <br />
                        Técnicas de Clustering para el Diagnóstico de Procesos <br />
                        Vibraciones Mecánicas <br />
                         <strong>Optativa III</strong> <br />
                        Control de Máquinas de CA <br />
                        Control de Vibraciones Mecánicas <br />
                       Diagnóstico y Supervisión de Procesos <br />
                         <strong>Optativa IV</strong> <br />
                       Administración de la Calidad <br />
                        Nanotecnología <br />
                        Procesamiento Digital de Imágenes <br />
                        Recursos y Necesidades de México <br />
                        Robótica Móvil<br />
                        Tópicos Selectos de Biomecatrónica
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
  ngOnInit(): void {
  }

}
