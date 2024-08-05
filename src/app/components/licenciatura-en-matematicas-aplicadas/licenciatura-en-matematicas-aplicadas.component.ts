import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licenciatura-en-matematicas-aplicadas',
  templateUrl: './licenciatura-en-matematicas-aplicadas.component.html',
  styleUrls: ['./licenciatura-en-matematicas-aplicadas.component.css']
})
export class LicenciaturaEnMatematicasAplicadasComponent implements OnInit {
  accordionPanels = [
    {
      title: 'JEFATURA DE CARRERA',
      content: `
        <div class="jefatura-carrera">
          <p>Dr. Franco Barragán Mendoza</p>
          <p><a href="mailto:jcmatematicasaplicadas@mixteco.utm.mx">jcmatematicasaplicadas@mixteco.utm.mx</a></p>
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
          <p><strong>El aspirante a cursar la Licenciatura en Matemáticas Aplicadas en la UTM deberá tener los siguientes conocimientos, habilidades y actitudes y valores:</strong></p>
          <p><strong>Conocimientos:</strong></p>
          <ul>
            <li>Aritmética.</li>
            <li>Álgebra básica.</li>
            <li>Trigonometría.</li>
            <li>Geometría.</li>
          </ul>
          <p><strong>Habilidades para:</strong></p>
          <ul>
            <li>Realizar razonamientos y emitir juicios.</li>
            <li>Resolver e interpretar problemas.</li>
            <li>Trabajar en equipo y de forma individual.</li>
          </ul>
          <p><strong>Actitudes y valores:</strong></p>
          <ul>
            <li>Interés por el estudio de las matemáticas.</li>
            <li>Gusto por enfrentar retos donde sea necesario el uso de razonamientos lógicos.</li>
            <li>Actitud positiva, apertura para conocer nuevos conceptos, procesos y técnicas.</li>
            <li>Ser perseverante y persistente para adquirir conocimiento.</li>
            <li>Comprensión, respeto, aprecio y tolerancia hacia la diversidad.</li>
          </ul>
        </div>
      `,
      isOpen: false
    },    
    {
      "title": "PERFIL DE EGRESO",
      "content": `
        <div class="perfil-egreso-content">
          <p><strong>El Licenciado en Matemáticas Aplicadas, es un profesional con una sólida formación en Matemáticas y sus aplicaciones actuales, posee gran capacidad de abstracción de la realidad, es capaz de interpretar, crear y resolver modelos matemáticos. Tiene una preparación de calidad que le permite realizar estudios de posgrado en el país y el extranjero. Al mismo tiempo, se desempeña en el sector público y de servicios, en centros de investigación científica y aplicada.</strong></p>
          
          <p><strong>Conocimientos:</strong></p>
          <ul>
            <li>Sólidos en las áreas del conocimiento: Análisis Matemático, Álgebra, Geometría y Topología, Probabilidad y Estadística y Modelado Matemático.</li>
            <li>Básicos de Programación, Inglés, Mecánica Clásica, Economía Matemática y Lógica Matemática.</li>
            <li>Sólidos en por lo menos una de las líneas terminales con orientación a: Ciencia de Datos e Inteligencia Artificial, Economía y Finanzas, Aproximación y Optimización, Topología y Sistemas Dinámicos, Biología Matemática, Probabilidad y Estadística.</li>
            <li>Del enfoque axiomático y de los métodos de validación en la construcción de las teorías matemáticas, y que sustentarán cualquier tipo de investigación aplicada.</li>
            <li>De los conceptos, métodos y teorías de las áreas fundamentales de las matemáticas, además de la diversa gama de posibilidades de aplicación.</li>
          </ul>
          
          <p><strong>Habilidades:</strong></p>
          <ul>
            <li>Construir y desarrollar argumentaciones lógicas con una identificación clara de hipótesis y conclusiones, así como de identificación de inconsistencias.</li>
            <li>Discernir el desarrollo lógico de teorías matemáticas y abstraer las relaciones entre ellas.</li>
            <li>Aplicar la matemática y sus estructuras lógicas, para resolver problemas de las ciencias exactas, naturales, sociales y/o la tecnología.</li>
            <li>Construir modelos matemáticos simplificados que describan una situación compleja, identificando sus elementos esenciales y efectuando las aproximaciones necesarias; conjeturando y creando estrategias de solución, analíticas y/o numéricas.</li>
            <li>Extraer información a partir de grandes volúmenes de datos, analizar y realizar predicciones.</li>
            <li>Generar procesos o proyectos de difusión u divulgación del conocimiento y valor de la matemática que impacten en su comunidad, así como elaborar e impartir cursos de matemáticas a distintos niveles.</li>
            <li>Razonar de manera estructurada, comunicar con claridad y precisión conceptos, procesos de investigación y resultados científicos en lenguaje oral y escrito ante sus pares, y en situaciones de enseñanza y de divulgación.</li>
          </ul>
          
          <p><strong>Actitudes y valores:</strong></p>
          <ul>
            <li>Desarrollar los valores éticos de la profesión que le permitan actuar adecuadamente dentro del campo laboral y social de manera cooperativa y colaborativa.</li>
            <li>Abordar los conflictos a través del diálogo y la negociación, ejerciendo los valores del pluralismo, democracia, equidad, solidaridad, tolerancia y paz.</li>
            <li>Ser líder íntegro y humanista, promotor de la convivencia multicultural y capaz de tener apertura al cambio, comprensión y tolerancia hacia la diversidad.</li>
            <li>Desarrollar investigación con responsabilidad social en equipos interdisciplinarios.</li>
            <li>Desarrollar un pensamiento abierto y flexible, con capacidad de asombro, que le permita la integración de nuevos saberes, para un aprendizaje a lo largo de la vida.</li>
          </ul>
        </div>
      `,
      "isOpen": false
    },    
    {
      title: 'CAMPO DE ACCIÓN',
      content: `
        <div class="campo-de-accion-content">
          <p>El Licenciado en Matemáticas Aplicadas tendrá conocimientos sólidos y habilidades para integrarse, entre otros, en los ámbitos laborales siguientes:</p>
          <ul>
            <li>Como profesionista independiente:</li>
            <ul>
              <li>Consultor en estadística, control de calidad y estudios de factibilidad.</li>
              <li>Dirección de empresas de investigación de mercados y estudios de opinión.</li>
              <li>Asesor para el desarrollo y la administración económica de empresas.</li>
              <li>Diseñador de software.</li>
            </ul>
            <li>Como miembro de una Empresa o Industria:</li>
            <ul>
              <li>Empresas públicas o privadas que requieren de análisis numéricos y métodos computacionales, análisis de datos e inteligencia artificial para análisis de mercado y toma de decisiones.</li>
              <li>Control y optimización de procesos productivos en diversas empresas o industrias.</li>
              <li>Simulación de sistemas, investigación de operaciones y experimentación en la industria.</li>
              <li>Empresas dedicadas al desarrollo de software o departamentos de planeación y logística.</li>
            </ul>
            <li>Como miembro de alguna Institución u Organización:</li>
            <ul>
              <li>Catedrático y/o investigador en instituciones educativas públicas o privadas a nivel medio superior y superior.</li>
              <li>En organismos que se dediquen a recolectar, organizar, analizar e interpretar grandes cantidades de datos.</li>
              <li>Tendrá los conocimientos suficientes para integrarse a programas afines de posgrados de excelencia, dentro y fuera del país.</li>
            </ul>
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
                        Matemáticas Básicas <br />
                        Geometría Euclidiana <br />
                        Fundamentos Programación Estructurada <br />
                        Historia del Pensamiento Filosófico <br />
                        <br />	
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
                        Álgebra Superior <br />
                        Cálculo Diferencial <br />
                        Geometría Analítica <br />
                        Elementos de Estructura de Datos <br />
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
                        Álgebra Lineal I <br />
                        Cálculo Integral <br />
                        Matemáticas Discretas <br />
                        Herramientas Computacionales <br />
                        Mecánica
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
                        Álgebra Lineal II <br />
                        Cálculo Diferencial en Varias Variables <br />
                        Ecuaciones Diferenciales Ordinarias <br />
                        Análisis Numérico I <br />
                        Análisis de Algoritmos
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
                        Álgebra Moderna I <br />
                        Cálculo Integral en Varias Variables <br />
                        Lógica Matemática <br />
                        Análisis Numérico II <br />
                        Probabilidad
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
                        Álgebra Moderna II <br />
                        Análisis Matemático I <br />
                        Ecuaciones Diferenciales Parciales <br />
                        Procesos Estocásticos <br />
                        <br />
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
                        Teoría de Optimización <br />
                        Análisis Matemático II <br />
                        Topología General <br />
                        Inteligencia Artificial
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
                        Teoría de la Medida <br />
                        Sistemas Dinámicos Continuos <br />
                        Introducción a Ciencia de Datos <br />
                        Temas de Estadística Aplicada
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
                        Análisis de Fourier <br />
                        Variable Compleja <br />
                        Modelación Matemática <br />
                        Metodología de la Investigación <br />
                        Optativa II
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
                        Análisis Funcional <br />
                        Economía Matemática <br />
                        Seminario de Tesis <br />
                        Optativa III <br />
                        <br />
                      </span>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div align="center">
                    <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                      <strong><font color="#410401">LÍNEAS TERMINALES</font></strong>
                    </span>
                  </div>
                  <br />
                  <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                    <span style="background-color:#ffffff;">
                      <span style="display:inline !important;">
                       • Biología Matemática<br />
                       • Aproximación y Optimización<br />
                       • Inteligencia Artificial y Ciencia de Datos<br />
                       • Topología y Sistemas Dinámicos<br />
                       • Probabilidad y Estadística<br />
                       • Economía y Finanzas
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
