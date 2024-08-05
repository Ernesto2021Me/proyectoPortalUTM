import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingenieria-mecanica-automotriz',
  templateUrl: './ingenieria-mecanica-automotriz.component.html',
  styleUrls: ['./ingenieria-mecanica-automotriz.component.css']
})
export class IngenieriaMecanicaAutomotrizComponent implements OnInit {
  accordionPanels = [
    {
      title: 'JEFATURA DE CARRERA',
      content: `
        <div class="jefatura-carrera">
          <p>M.C. Víctor Manuel Cruz Martínez</p>
          <p><a href="mailto:jcautomotriz@mixteco.utm.mx">jcautomotriz@mixteco.utm.mx</a></p>
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
          <p><strong>El aspirante deberá haber cursado su enseñanza media superior preferentemente con una formación en el área físico-matemática o áreas afines, que cuente con lo siguiente:</strong></p>
          <p><strong>Conocimientos:</strong></p>
          <ul>
            <li>Básicos en matemáticas y física.</li>
          </ul>
          <p><strong>Habilidades:</strong></p>
          <ul>
            <li>Trabajo en equipo.</li>
            <li>Solución de problemas prácticos.</li>
            <li>Capacidad para el razonamiento matemático.</li>
          </ul>
          <p><strong>Actitudes y Valores:</strong></p>
          <ul>
            <li>Responsabilidad social y ambiental.</li>
            <li>Respeto, tolerancia y disciplina.</li>
          </ul>
        </div>
      `, 
      isOpen: false 
    },    
    { 
      title: 'PERFIL DE EGRESO', 
      content: `
        <div class="perfil-egreso-content">
          <p><strong>Perfil del Egresado</strong></p>
          
          <p>El Ingeniero Mecánico Automotriz será capaz de diseñar, manufacturar y realizar mantenimiento a las partes y componentes de sistemas automotrices.</p>
          
          <p><strong>Conocimientos:</strong></p>
          <ol>
            <li>En física y matemáticas que le permiten desarrollar las ciencias de la ingeniería mecánica y automotriz.</li>
            <li>En ciencias de la ingeniería como mecánica vectorial, resistencia e ingeniería de materiales, termodinámica y transferencia de calor, mecánica de fluidos, electromagnetismo, circuitos eléctricos y electrónicos para comprender y analizar el funcionamiento de los diferentes componentes de los sistemas automotrices.</li>
            <li>De herramientas computacionales para el diseño, modelado y análisis de partes y componentes de sistemas automotrices.</li>
            <li>De planificación y procesos de manufactura para desarrollar y evaluar prototipos de partes y componentes de sistemas automotrices.</li>
            <li>De técnicas de diagnóstico para realizar planes de mantenimiento predictivo, preventivo y correctivo de los sistemas automotrices.</li>
            <li>Para continuar estudios de especialización o posgrado.</li>
          </ol>
          
          <p><strong>Habilidades:</strong></p>
          <ul>
            <li>Trabajar en equipos multidisciplinarios y de manera independiente.</li>
            <li>Proponer soluciones prácticas a problemas reales.</li>
            <li>Identificar las causas de problemas en el funcionamiento de los sistemas automotrices.</li>
            <li>Adaptarse y asimilar los cambios tecnológicos en la industria automotriz.</li>
            <li>Administrar y desarrollar proyectos.</li>
          </ul>
          
          <p><strong>Actitudes y Valores:</strong></p>
          <ul>
            <li>Responsabilidad y cumplimiento en tareas asignadas.</li>
            <li>Proactividad ante problemas que se presenten en el trabajo individual y colectivo.</li>
            <li>Dignidad y profesionalismo.</li>
            <li>Promover el respeto por el medio ambiente.</li>
            <li>Iniciativa para proponer innovación tecnológica.</li>
          </ul>
        </div>
      `, 
      isOpen: false 
    },    
    { 
      title: 'CAMPO DE ACCIÓN', 
      content: `
        <div class="campo-de-accion-content">
          <p>El Ingeniero Mecánico Automotriz podrá desempeñarse profesionalmente en:</p>
          <ul>
            <li>Plantas armadoras de automóviles.</li>
            <li>Industria de maquinaria agrícola, marítima, ferroviaria, construcción y transporte de carga y pasaje.</li>
            <li>Centros de investigación y desarrollo tecnológico.</li>
            <li>Empresas de manufactura de equipo original.</li>
            <li>Empresas proveedoras de la industria automotriz.</li>
            <li>Capacitación y consultoría.</li>
            <li>Agencias y centros de servicio automotriz.</li>
            <li>Establecer su propia empresa de mantenimiento.</li>
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
