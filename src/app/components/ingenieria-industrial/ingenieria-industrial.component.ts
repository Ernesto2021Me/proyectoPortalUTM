import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingenieria-industrial',
  templateUrl: './ingenieria-industrial.component.html',
  styleUrls: ['./ingenieria-industrial.component.css']
})
export class IngenieriaIndustrialComponent implements OnInit {
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
      title: 'JEFATURA DE CARRERA',
      content: `
        <div class="jefatura-carrera">
          <p>Dr. Carlos Vázquez Cid</p>
          <p><a href="mailto:jcindustrial@mixteco.utm.mx">jcindustrial@mixteco.utm.mx</a></p>
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
        <div class="objetivo-content">
          <p>Formar Ingenieros Industriales con conocimientos en el diseño, instalación y mejoramiento de sistemas integrados por tecnología, materiales, factor humano y energía, para desempeñarse en actividades del ámbito tecnológico, económico y administrativo e incrementar la productividad y sustentabilidad en la sociedad e industria oaxaqueña y mexicana.</p>
        </div>
      `, 
      isOpen: false 
    },
    {
      title: 'PERFIL DE INGRESO',
      content: `
        <div class="perfil-ingreso-content">
          <p><strong>El aspirante a cursar la carrera de Ingeniería Industrial deberá mostrar interés por atender los problemas que implica el desarrollo tecnológico, organizacional y económico del sector productivo regional, estatal y nacional, además de poseer las siguientes competencias:</strong></p>
          <ul>
            <li>Conocimientos a nivel medio superior en las áreas físico–matemáticas o económico–administrativas.</li>
            <li>Habilidades para trabajar en equipo, comunicación, liderazgo y capacidad de análisis.</li>
            <li>Actitudes y valores de responsabilidad social y ambiental, respeto, tolerancia y disciplina.</li>
          </ul>
          <p><span style="color: #999;">Además, se requiere que el aspirante disponga de tiempo completo para sus estudios.</span></p>
        </div>
      `,
      isOpen: false
    },    
    { 
      title: 'PERFIL DE EGRESO', 
      content: `
        <div class="perfil-egreso-content">
          <p>El egresado de la carrera de Ingeniería Industrial desarrollará las siguientes competencias relacionadas a:</p>
          
          <ul>
            <li>Conocimientos de las ciencias básicas y de la ingeniería aplicables para la solución de problemas del desarrollo industrial sustentable, en el ámbito de estudio del trabajo, gestión de la cadena de suministro, formulación y evaluación de proyectos, sistemas productivos y gestión industrial, en empresas e instituciones donde se desempeñe.</li>
            <li>Habilidad tecnológica en Ingeniería Industrial con capacidad de análisis, interpretación y modelación de sistemas productivos, así como de crear su propia fuente de empleo fundamentada en la pertinencia regional, estatal y nacional.</li>
            <li>Actitudes de responsabilidad social y laboral, así como, valores de disciplina, ética, respeto, equidad, honestidad y lealtad.</li>
          </ul>
        </div>
      `, 
      isOpen: false 
    },    
    { 
      title: 'CAMPO DE ACCIÓN', 
      content: `
        <div class="campo-de-accion-content">
          <p>El Ingeniero Industrial es un profesionista con alta competitividad que puede incorporarse a instituciones públicas o privadas en áreas como: producción, control de calidad, logística, proyectos, administración, investigación, desarrollo de productos, docencia, seguridad e higiene, finanzas, gestión de calidad y desarrollo tecnológico, entre muchas más, de cualquier sector de la industria manufacturera. Además, puede ser un profesionista independiente al crear su propia fuente de trabajo.</p>
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
                        Mecánica Clásica <br />
                        Dibujo Industrial <br />
                        Historia del Pensamiento Filosófico <br />
                        Introducción a la Ingeniería Industrial
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
                        Electricidad Industrial <br />
                        Teoría General de Sistemas <br />
                        Relaciones Industriales
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
                        Química General <br />
                        Electrónica Analógica <br />
                        Fundamentos de Programación para Ingeniería <br />
                        Comunicación Efectiva
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
                        Métodos Numéricos <br />
                        Fundamentos de Probabilidad <br />
                        Ciencia de Materiales <br />
                        Derecho Laboral y Propiedad Industrial <br />
                        Termodinámica
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
                        Estudio del Trabajo y Productividad <br />
                        Estadística Aplicada <br />
                        Tecnología de Materiales <br />
                        Metrología y Normalización <br />
                        Mecánica de Fluidos
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
                        Ergonomía <br />
                        Control Estadístico de Calidad <br />
                        Mercadotecnia <br />
                        Procesos de Manufactura I <br />
                        Maquinaria y Equipo Industrial
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
                        Gestión Ambiental <br />
                        Planeación Organizacional <br />
                        Administración de Recursos Materiales <br />
                        Procesos de Manufactura II <br />
                        Contabilidad y Costos
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
                        Higiene y Seguridad Industrial <br />
                        Logística y Cadena de Suministros <br />
                        Planeación y Control de la Producción <br />
                        Sistemas de Manufactura <br />
                        Ingeniería Económica
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
                        Planeación de Instalaciones <br />
                        Investigación Operativa <br />
                        Gestión de Sistemas de Calidad <br />
                        Seminario de Tesis <br />
                        Optativa I
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
                        Automatización para Ingeniería Industrial <br />
                        Mantenimiento Industrial <br />
                        Formulación y Evaluación de Proyectos <br />
                        Optativa II <br />
                        Optativa III
                      </span>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div align="center">
                    <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                      <strong><font color="#410401">Áreas de Especialización</font></strong>
                    </span>
                  </div>
                  <br />
                </td>
              </tr>
               <tr>
                <td>
                  <div align="center">
                    <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                      <strong><font color="#410401">Manufactura</font></strong>
                    </span>
                  </div>
                  <br />
                  <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                    <span style="background-color:#ffffff;">
                      <span style="display:inline !important;">
                        Optativa I: Manufactura Asistida por Computadora <br />
                        Optativa II: Proyecto de Manufactura <br />
                        Optativa III: Simulación Industrial 
                      </span>
                    </span>
                  </span>
                </td>
                <td>
                  <div align="center">
                    <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                      <strong><font color="#410401">Gestión Administrativa</font></strong>
                    </span>
                  </div>
                  <br />
                  <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                    <span style="background-color:#ffffff;">
                      <span style="display:inline !important;">
                       Optativa I: Dirección General <br />
                        Optativa II: Gestión Industrial <br />
                        Optativa III: Comercio Exterior y Logística Internacional
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
