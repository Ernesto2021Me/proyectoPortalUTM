import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingenieria-en-alimentos',
  templateUrl: './ingenieria-en-alimentos.component.html',
  styleUrls: ['./ingenieria-en-alimentos.component.css']
})
export class IngenieriaEnAlimentosComponent implements OnInit {
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
          <p> Dra. Paula Cecilia Guadarrama Mendoza</p>
          <p><a href="mailto:jcagroindustrias@mixteco.utm.mx">jcagroindustrias@mixteco.utm.mx</a></p>
        </div>
      `,
      isOpen: false
    },
    { 
      title: 'MISIÓN', 
      content: `
        ....
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
        ....
      `, 
      isOpen: false 
    },
    { 
      title: 'PERFIL DE INGRESO', 
      content: `
        <div class="perfil-ingreso-content">
          <p><strong>El aspirante a cursar la carrera de Ingeniería en Alimentos en la UTM deberá tener los siguientes conocimientos, habilidades y actitudes:</strong></p>
          <p><strong>Conocimientos:</strong></p>
          <ul>
            <li>Básicos en el área físico-matemática.</li>
            <li>Básicos de redacción para la elaboración de textos.</li>
          </ul>
          <p><strong>Habilidades:</strong></p>
          <ul>
            <li>Comunicación oral y escrita.</li>
            <li>Disposición para trabajar en equipo.</li>
            <li>Creatividad.</li>
          </ul>
          <p><strong>Actitudes y Valores:</strong></p>
          <ul>
            <li>Interés por el conocimiento, la aplicación tecnológica y la investigación.</li>
            <li>Capacidad de adaptación al cambio y a la asimilación de nuevos conocimientos.</li>
            <li>Búsqueda de la superación y mejora personal.</li>
            <li>Empatía y respeto con sus semejantes.</li>
            <li>Apertura al diálogo.</li>
            <li>Comprensión y tolerancia hacia la diversidad étnica, de clase, género, preferencias políticas o sexuales.</li>
            <li>Respeto y aprecio por la diversidad ecológica.</li>
            <li>Aprecio por la diversidad cultural de la región, el estado y el país.</li>
            <li>Responsabilidad y puntualidad.</li>
          </ul>
        </div>
      `, 
      isOpen: false 
    },
    { 
      title: 'PERFIL DE EGRESO', 
      content: `
        <div class="perfil-egreso-content">
          <p>El egresado de la carrera de Ingeniería en Alimentos de la UTM es un profesionista líder, eficaz, emprendedor, responsable, con compromiso social, elevada capacidad de comunicación y actitud de superación permanente, capaz de aplicar los conocimientos y herramientas científico-tecnológicas al diseño, optimización y evaluación del equipo, plantas, procesos, productos y sistemas de control de calidad, que inciden en la mejora de las condiciones de productividad, conservación, almacenamiento, distribución y manejo de los productos alimenticios, promoviendo así el desarrollo económico, ambiental y social de la región y del país.</p>
          
          <p>Asimismo, el egresado de la carrera de Ingeniería en Alimentos de la UTM posee los siguientes conocimientos, habilidades y actitudes:</p>
          
          <p><strong>Conocimientos:</strong></p>
          <ul>
            <li>Ciencias básicas.</li>
            <li>En las áreas químico-biológicas y físico-matemáticas para la resolución de las problemáticas relacionadas con los alimentos.</li>
            <li>En el área empresarial y de sistemas de calidad.</li>
            <li>En las metodologías y tecnologías innovadoras para el desarrollo de productos y procesos de los alimentos.</li>
            <li>En las estrategias y manejo de la información y comunicación para el alcance de un conocimiento significativo.</li>
          </ul>
          
          <p><strong>Habilidades:</strong></p>
          <ul>
            <li>Comunicación asertiva tanto verbal como escrita.</li>
            <li>Identificación, resolución y evaluación de problemáticas.</li>
            <li>Pensamiento analítico orientado a la resolución de problemas prácticos.</li>
            <li>Disposición de trabajar en equipo.</li>
            <li>Creativo.</li>
          </ul>
          
          <p><strong>Actitudes y Valores:</strong></p>
          <ul>
            <li>Actitud de superación personal y profesional permanente.</li>
            <li>Ético y con valores morales.</li>
            <li>Responsable y de compromiso social.</li>
            <li>Entusiasta y solidario para el trabajo en equipo.</li>
            <li>Interés por el conocimiento, la aplicación tecnológica y la investigación.</li>
            <li>Capacidad de adaptación al cambio y a la asimilación de nuevos conocimientos.</li>
            <li>Apertura al diálogo.</li>
            <li>Comprensión y tolerancia hacia la diversidad étnica, de clase, género, preferencias políticas o sexuales.</li>
            <li>Respeto y aprecio por la diversidad ecológica.</li>
            <li>Aprecio por la diversidad cultural de la región, el estado y el país.</li>
          </ul>
        </div>
      `, 
      isOpen: false 
    },
    { 
      title: 'CAMPO DE ACCIÓN', 
      content: `
        <div class="campo-de-accion-content">
          <p>El Ingeniero en Alimentos es un profesionista que puede incorporarse en:</p>
          <ul>
            <li><strong>Sector industrial relacionado con el área de alimentos:</strong> Control de calidad, producción, desarrollo de nuevos productos.</li>
            <li><strong>Empresarial:</strong> En la dirección de proyectos del área en alimentos.</li>
            <li><strong>Sector académico/investigación:</strong> En el área química o tecnológica relacionada con el área de los alimentos.</li>
            <li><strong>Auditoría/Consultoría:</strong> En la industria de los alimentos.</li>
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
                        Química General <br />
                        Fundamentos de Matemáticas para Ingenieros <br />
                        Herramientas de Computación <br />
                        Historia del Pensamiento Filosófico <br />
                        Introducción a la Ingeniería en Alimentos
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
                        Química Orgánica I <br />
                        Cálculo Diferencial e Integral para Ingenieros <br />
                        Mecánica Clásica <br />
                        Teoría General de Sistemas <br />
                        Cálculos Básicos en Ingeniería de Alimentos
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
                        Química Orgánica II <br />
                        Ecuaciones Diferenciales para Ingenieros <br />
                        Microbiología de Alimentos <br />
                        Balance de Materia y Energía
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
                        Bioquímica <br />
                        Química de Alimentos <br />
                        Termodinámica <br />
                        Estadística y Quimiometría <br />
                        Análisis Clásico de Alimentos
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
                        Análisis Instrumental de Alimentos <br />
                        Fisicoquímica de Alimentos <br />
                        Transporte de Movimiento con Aplicaciones <br />
                        Diseño y Análisis de Experimentos
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
                        Nutrición y Alimentos Funcionales <br />
                        Transferencia de Calor y Masa con Aplicaciones <br />
                        Procesos Tecnológicos de Productos Cárnicos <br />
                        Taller de Evaluación Sensorial
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
                        Sistemas de Gestión de la Calidad <br />
                        Operaciones Unitarias con Procesos Térmicos <br />
                        Procesos Biotecnológicos Alimentarios <br />
                        Procesos Tecnológicos de Cereales <br />
                        Herramientas Administrativas y Financieras
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
                        Aseguramiento de la Calidad e Inocuidad Alimentaria <br />
                        Seminario de Planeación y Análisis de Negocios <br />
                        Operaciones por Etapas de Equilibrio <br />
                        Procesos Tecnológicos de Frutas y Hortalizas <br />
                        Metodología de la Investigación
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
                        Procesos de Separación Físico-Mecánicos <br />
                        Procesos Tecnológicos de Productos Lácteos <br />
                        Dibujo en Ingeniería <br />
                        Gestión Ambiental y Sustentabilidad <br />
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
                        Desarrollo de Nuevos Productos <br />
                        Comportamiento Organizacional y Habilidades Directivas <br />
                        Diseño de Plantas Alimentarias <br />
                        Fronteras de la Ingeniería en Alimentos <br />
                        Optativa II
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
                        Serie Empresarial: Mercadotecnia en la Producción y Comercialización de Alimentos <br />
                        Serie Industrial: Higiene y Seguridad Industrial <br />
                        <strong>Optativa II</strong> <br />
                        Serie Empresarial: Seminario de Ejecución y Evaluación de Negocios <br />
                        Serie Industrial: Planeación y Control de Producción
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
