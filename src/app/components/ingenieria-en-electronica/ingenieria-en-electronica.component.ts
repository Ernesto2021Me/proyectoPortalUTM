import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingenieria-en-electronica',
  templateUrl: './ingenieria-en-electronica.component.html',
  styleUrls: ['./ingenieria-en-electronica.component.css']
})
export class IngenieriaEnElectronicaComponent implements OnInit {
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
          <p>Dr. Edgardo Yescas Mendoza</p>
          <p><a href="mailto:jcelectronica@mixteco.utm.mx">jcelectronica@mixteco.utm.mx</a></p>
        </div>
      `,
      isOpen: false
    },
    { 
      title: 'MISIÓN', 
      content: `
        <div class="mision-content">
          <p>La Ingeniería en Electrónica de la Universidad Tecnológica de la Mixteca (UTM) tiene la misión de formar profesionales en las áreas del Internet de las cosas y de la electrónica de potencia, con espíritu emprendedor y valores universales, que contribuyan a elevar la calidad de vida y el desarrollo de la sociedad, a través de la formulación y la dirección de proyectos tecnológicos innovadores; haciendo uso sostenible de los recursos naturales, en los ámbitos local, estatal y nacional.</p>
        </div>
      `, 
      isOpen: false 
    },
    { 
      title: 'VISIÓN', 
      content: `
        <div class="vision-content">
          <p>Formar Ingenieros en Electrónica altamente competitivos, capaces de investigar, innovar, crear, sintetizar, diseñar, evaluar, desarrollar, utilizar y mantener sistemas empotrados, con la opción de especializarse en dos áreas, Internet de las cosas o Electrónica de Potencia; de tal forma que propicien un cambio económico y social de su entorno, con el uso sostenible de los recursos naturales en los ámbitos local, estatal y nacional.</p>
        </div>
      `, 
      isOpen: false 
    },
    { 
      title: 'OBJETIVO', 
      content: `
        ....
      `, 
      isOpen: false 
    },
    { 
      title: 'PERFIL DE INGRESO', 
      content: `
        <div class="perfil-ingreso-content">
          <p><strong>Egresado de bachillerato preferentemente en el área de Físico-Matemáticas, disciplinado y constante en su aprendizaje. Curiosidad por saber cómo funcionan las cosas, interés en comprender el funcionamiento de dispositivos, sistemas electrónicos y en la tecnología, habilidades y destrezas para construir prototipos.</strong></p>
        </div>
      `, 
      isOpen: false 
    },
    { 
      title: 'PERFIL DE EGRESO', 
      content: `
        <div class="perfil-egreso-content">
          <p><strong>El egresado de la Ingeniería en Electrónica es el profesionista que se caracteriza por su visión creativa e innovadora para diseñar sistemas electrónicos que integren hardware y software con tecnología de vanguardia. Está preparado para enfrentar desafíos en el campo de la electrónica y es apto para continuar con estudios de posgrado, como maestría o doctorado.</strong></p>
          
          <p>Te invitamos a sumergirte en el fascinante mundo de la Ingeniería en Electrónica a través de nuestro canal de YouTube. Descubre las <a href="https://www.youtube.com/playlist?list=PLryMJrShwg0mNJjF5Coh6KI8x7ZekYlVg" target="_blank">23 Charlas con Egresados </a>, donde conocerás de primera mano los increíbles logros de nuestros egresados. Observa cómo aplican sus conocimientos en su trabajo actual y explora los emocionantes proyectos que están desarrollando en el campo de la electrónica. ¡No te pierdas esta oportunidad de inspirarte y descubrir tu potencial en esta apasionante carrera!</p>
        </div>
      `, 
      isOpen: false 
    },
   { 
      title: 'CAMPO DE ACCIÓN', 
      content: `
        <div class="campo-de-accion-content">
          <p>El ingeniero en Electrónica tiene un amplio campo de acción en empresas e instituciones tanto públicas como privadas, industriales o de servicios. Además, puede desempeñarse de manera independiente, ofreciendo sus servicios en el diseño, implementación, análisis y mantenimiento de circuitos, dispositivos y sistemas electrónicos.</p>
          
          <p>La Ingeniería en Electrónica se enfoca en el diseño, implementación, análisis y mantenimiento de circuitos, dispositivos y sistemas electrónicos. Incluye sectores como la industria electrónica, la industria médica, automotriz y aeroespacial, entre otros.</p>

          <p>La industria electrónica es una de las de mayor crecimiento en el mundo. En México, se encuentra instalada una industria electrónica compuesta por más de 766 empresas, las cuales se especializan en el ensamblaje y la manufactura de productos electrónicos de consumo, de la industria médica, automotriz y aeroespacial, por mencionar algunos. Las principales empresas del sector electrónico que tienen presencia en el país son Samsung®, LG®, Toshiba®, Foxconn®, Flextronics®, Continental® e Intel®, las cuales también han invertido en México, no solamente en plantas manufactureras, sino también en Centros de Ingeniería y Diseño, donde trabajan muchos de nuestros egresados.</p>
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
                        Cálculo I <br />
                        Mecánica para Ingeniería <br />
                        Historia del pensamiento filosófico <br />
                        Programación Estructurada <br />
                        Fundamentos de Sistemas Electrónicos
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
                        Cálculo II <br />
                        Álgebra Lineal <br />
                        Teoría general de sistemas <br />
                        Estructura de Datos <br />
                        Instrumentación Electrónica
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
                        Análisis Vectorial <br />
                        Ecuaciones Diferenciales <br />
                        Circuitos Eléctricos I <br />
                        Programación Orientada a Objetos <br />
                        Construcción de Sistemas Electrónicos
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
                        Transformadas para Ingeniería <br />
                        Electricidad y Magnetismo <br />
                        Circuitos Eléctricos II <br />
                        Programación Visual <br />
                        Circuitos Lógicos
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
                        Química para Ingeniería <br />
                        Métodos Numéricos <br />
                        Circuitos Electrónicos <br />
                        Sensores y Actuadores <br />
                        Circuitos Digitales Reconfigurables
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
                        Fundamentos de Administración <br />
                        Microcontroladores <br />
                        Sistemas de Control <br />
                        Electrónica de Potencia <br />
                        Comunicación de Datos
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
                        Dirección de Empresas <br />
                        Microcontroladores Avanzados <br />
                        Máquinas Eléctricas <br />
                        Procesamiento de Señales <br />
                        Redes de Computadoras
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
                        Derecho Mercantil, Laboral y Propiedad Industrial <br />
                        Sistemas Operativos Empotrados <br />
                        Fundamentos de Robótica <br />
                        Administración de Redes <br />
                        Fundamentos de Internet de las Cosas
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
                        Arquitectura de Computadoras <br />
                        Ingeniería de Sistemas Empotrados <br />
                        Inteligencia Artificial <br />
                        Redes Industriales <br />
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
                        Proyecto Terminal <br />
                        Controladores Lógicos Programables <br />
                        Visión Artificial <br />
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
                      <strong><font color="#410401">Optativas según especialidad</font></strong>
                    </span>
                  </div>
                  <br />
                  <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                    <span style="background-color:#ffffff;">
                      <span style="display:inline !important;">
                        <strong>Optativa I</strong> <br />
                        Internet de la Cosas: Internet de las cosas<br />
                        Electrónica de potencia: 	Energías Renovables <br />
                        <strong>Optativa II</strong> <br />
                        Internet de la Cosas: Análisis de Datos<br />
                        Electrónica de potencia: 	Tópicos Selectos de Control<br />
                        <strong>Optativa III</strong> <br />
                        Internet de la Cosas: Desarrollo de Soluciones IoT<br />
                        Electrónica de potencia: Sistemas de Accionamiento Eléctrico<br />
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
