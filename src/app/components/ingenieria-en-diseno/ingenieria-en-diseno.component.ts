import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingenieria-en-diseno',
  templateUrl: './ingenieria-en-diseno.component.html',
  styleUrls: ['./ingenieria-en-diseno.component.css']
})
export class IngenieriaEnDisenoComponent implements OnInit {
  accordionPanels = [
    {
      title: 'JEFATURA DE CARRERA',
      content: `
        <div class="jefatura-carrera">
          <p>Mtro. Itzcóatl Bolaños Gómez</p>
          <p><a href="mailto:jcdiseno@mixteco.utm.mx">jcdiseno@mixteco.utm.mx</a></p>
        </div>
      `,
      isOpen: false
    },
    { 
      title: 'MISIÓN', 
      content: `
        <div class="mision-content">
          <p>Formar un profesional de alta calidad, capaz de transformar a la sociedad a partir de la identificación de problemas que requieran soluciones de diseño con un enfoque integral, realizar estudios que permitan la mejor explotación de los recursos, fomentar el desarrollo económico y social de Oaxaca y de México, en un marco de respeto a los valores humanos y el entorno.</p>
        </div>
      `, 
      isOpen: false 
    },
    { 
      title: 'VISIÓN', 
      content: `
        <div class="vision-content">
          <p>Posicionar al Ingeniero en Diseño como un profesional con un perfil único, innovador, emprendedor y con conciencia social, con competencias para integrar equipos de trabajo interdisciplinarios orientados a solucionar problemas en diversos niveles.</p>
        </div>
      `, 
      isOpen: false 
    },
    { 
      title: 'OBJETIVO', 
      content: `
        <div class="objetivo-content">
          <p>Formar un profesional que cuente con los conocimientos y habilidades de diseño e ingeniería para resolver de manera interdisciplinaria problemas que requieran soluciones de diseño integral.</p>
        </div>
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
          <p><strong>El Ingeniero en Diseño es un profesionista con sólidos conocimientos en ciencias básicas y la ingeniería, habilidades creativas y actitudes emprendedoras.</strong></p>
          
          <p><strong>El Ingeniero en Diseño contará con:</strong></p>
          
          <p><strong>Conocimientos:</strong></p>
          <ul>
            <li>Ciencias básicas, procesos de ingeniería, metodologías de diseño, desarrollo tecnológico y gestión empresarial, que le permitirán desarrollar ideas de manera organizada y sistemática.</li>
          </ul>
          
          <p><strong>Habilidades:</strong></p>
          <ul>
            <li>Creativas, de organización y desarrollo de ideas, comunicación, trabajo en equipo e interdisciplinario.</li>
            <li>Análisis y síntesis, mentalidad orientada a resolver problemas en procesos para el desarrollo de conceptos de diseño integral.</li>
          </ul>
          
          <p><strong>Actitudes y Valores:</strong></p>
          <ul>
            <li>La capacidad de emprender y adaptarse a diversos ambientes de trabajo.</li>
            <li>Liderazgo, honestidad y ética profesional.</li>
            <li>Interés por los problemas de la comunidad, calidad humana, ser emprendedor.</li>
            <li>Conciencia del aprovechamiento eficiente de los recursos naturales.</li>
          </ul>
        </div>
      `, 
      isOpen: false 
    },
    { 
      title: 'CAMPO DE ACCIÓN', 
      content: `
        <div class="campo-de-accion-content">
          <p>El Ingeniero en Diseño puede:</p>
          <ul>
            <li>Crear su propia empresa.</li>
            <li>Ejercer en despachos de diseño con una perspectiva integral.</li>
            <li>Trabajar en empresas privadas.</li>
            <li>Colaborar en dependencias gubernamentales.</li>
            <li>Formar parte de instituciones educativas.</li>
            <li>Unirse a asociaciones civiles que cuenten con un área de diseño.</li>
            <li>Consolidarse en puestos de dirección creativa y/o de producción.</li>
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
                        Elementos Básicos del Diseño <br />
                        Bases del Dibujo <br />
                        Programación <br />
                        Historia del Pensamiento Filosófico <br />
                        Cálculo Diferencial e Integral
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
                        Historia del Arte <br />
                        Geometría Descriptiva <br />
                        Estática <br />
                        Teoría General de Sistemas <br />
                        Álgebra Lineal
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
                        Modelos <br />
                        Dibujo Técnico <br />
                        Dinámica <br />
                        Metodología para la Ingeniería en Diseño <br />
                        Ecuaciones Diferenciales
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
                        Ergonomía <br />
                        Dibujo Asistido por Computadora CAD <br />
                        Resistencia de Materiales <br />
                        Fundamentos de Física Ondulatoria <br />
                        Métodos Numéricos
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
                        Química de los Materiales <br />
                        Ilustración Analógica y Digital <br />
                        Sistemas Constructivos <br />
                        Termodinámica <br />
                        Sistemas de Impresión
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
                        Manufactura en Madera <br />
                        Análisis y Diseño de Estructuras <br />
                        Proyecto Arquitectónico I <br />
                        Elementos de Máquinas <br />
                        Estadística
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
                        Manufactura en Metales <br />
                        Comunicación Visual <br />
                        Proyecto Arquitectónico II <br />
                        Circuitos Eléctricos y Electrónicos <br />
                        Ingeniería y Manufactura Asistido por Computadora CAE-CAM
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
                        Manufactura en Polímeros <br />
                        Editorial <br />
                        Diseño Urbano y de Paisaje <br />
                        Costo y Tiempo en la Edificación <br />
                        Administración y Dirección
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
                        Manufactura en Cerámica y Vidrio <br />
                        Identidad Corporativa <br />
                        Optativa I <br />
                        Desarrollo de Producto I <br />
                        Contabilidad y Finanzas
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
                        Manufactura en Textil <br />
                        Multimedios Digitales <br />
                        Optativa II <br />
                        Desarrollo de Producto II <br />
                        Mercadotecnia
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
                      Proyecto de Ingeniería en Diseño I: Imagen <br />
                      Proyecto de Ingeniería en Diseño I: Objetos <br />
                      Proyecto de Ingeniería en Diseño I: Espacios <br />
                      <strong>Optativa II</strong> <br />
                      Proyecto de Ingeniería en Diseño II: Imagen <br />
                      Proyecto de Ingeniería en Diseño II: Objetos <br />
                      Proyecto de Ingeniería en Diseño II: Espacios
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
