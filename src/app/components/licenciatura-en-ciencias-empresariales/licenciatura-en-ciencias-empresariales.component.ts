import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licenciatura-en-ciencias-empresariales',
  templateUrl: './licenciatura-en-ciencias-empresariales.component.html',
  styleUrls: ['./licenciatura-en-ciencias-empresariales.component.css']
})
export class LicenciaturaEnCienciasEmpresarialesComponent implements OnInit {
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
      <p>Lic. Francisca Adriana Sánchez Meza</p>
      <p><a href="mailto:jcempresariales@mixteco.utm.mx">jcempresariales@mixteco.utm.mx</a></p>
    </div>
  `,
  isOpen: false
},
{ 
  title: 'MISIÓN', 
  content: `
    <div class="mision-content">
      <p>Formar profesionales con habilidades y competencias necesarias para emprender proyectos de negocios y/o dirigir organizaciones bajo una visión integradora, global y estratégica; capaces de aplicar con ética, conocimientos administrativos, contables, financieros y de mercadotecnia, basados en la experiencia transmitida por los profesores investigadores, así como en actividades de vinculación con el sector empresarial e infraestructura óptima, que contribuyan al desarrollo sustentable de la región, del estado y del país.</p>
    </div>
  `, 
  isOpen: false 
},
    { 
      title: 'VISIÓN', 
      content: `
        <div class="vision-content">
          <p>Ser una licenciatura comprometida con la excelencia académica; líder en el desarrollo empresarial, coadyuvante de la formación de directivos y empresarios capaces de satisfacer las necesidades de mejora continua que demanda la sociedad.</p>
        </div>
      `, 
      isOpen: false 
    },
    { 
      title: 'OBJETIVO', 
      content: `
        <div class="objetivo-content">
          <p>Formar profesionistas altamente calificados, competitivos, visionarios con sólidos valores, sensibles a las necesidades sociales y de su entorno, comprometidos a contribuir con su conocimiento al desarrollo de la región y del estado.</p>
        </div>
      `, 
      isOpen: false 
    },    
    { 
      title: 'PERFIL DE INGRESO', 
      content: `
        <div class="perfil-ingreso-content">
          <p>El aspirante a la Licenciatura en Ciencias Empresariales deberá contar preferentemente con los siguientes conocimientos, habilidades, actitudes y valores:</p>
    
          <p><strong>Conocimientos en:</strong></p>
          <ul>
            <li>Administración, contabilidad, economía, derecho y álgebra básica.</li>
          </ul>
    
          <p><strong>Habilidades para:</strong></p>
          <ul>
            <li>Realizar planteamientos y análisis de casos empresariales.</li>
            <li>Administración de su tiempo.</li>
            <li>Realizar trabajo en equipo con personas de su misma formación.</li>
            <li>Realizar trabajo interdisciplinario.</li>
          </ul>
    
          <p><strong>Actitudes y Valores:</strong></p>
          <ul>
            <li>Compromiso.</li>
            <li>Responsabilidad.</li>
            <li>Honestidad.</li>
            <li>Perseverancia.</li>
          </ul>
          
        </div>
      `, 
      isOpen: false 
    },    
    { 
      title: 'PERFIL DE EGRESO', 
      content: `
        <div class="perfil-egreso-content">
          <p>El egresado de la Licenciatura en Ciencias Empresariales tendrá la capacidad para iniciar una empresa y/o gestionar una existente. De Identificar oportunidades de negocios, de proponer y emprender responsablemente proyectos en beneficio de su entorno. Además, su formación integral, conocimientos, habilidades, actitudes y valores le permitirá:</p>
          
          <ul>
            <li>Identificar y evaluar oportunidades de negocio con una actitud emprendedora.</li>
            <li>Desarrollar y evaluar proyectos de inversión con ética y responsabilidad social.</li>
            <li>Crear, dirigir, desarrollar y/o consolidar empresas desde una perspectiva creativa e innovadora.</li>
            <li>Tomar decisiones efectivas en el manejo y la aplicación de los recursos.</li>
            <li>Dirigir grupos multidisciplinarios, motivar a las personas y resolver conflictos interpersonales.</li>
            <li>Coordinar y realizar negociaciones efectivas necesarias para solución de problemas específicos y el logro de objetivos empresariales.</li>
            <li>Diseñar e implementar estrategias para lograr la competitividad.</li>
            <li>Coadyuvar en el desarrollo regional y sustentable bajo una perspectiva global.</li>
            <li>Propiciar la productividad y rentabilidad de la empresa con un enfoque de servicio al cliente, desarrollo organizacional y mejora de la calidad de vida en el trabajo.</li>
          </ul>
          
        </div>
      `, 
      isOpen: false 
    },
    { 
      title: 'CAMPO DE ACCIÓN', 
      content: `
        <div class="campo-de-accion-content">
          <p>El Licenciado en Ciencias Empresariales tiene conocimientos, habilidades y aptitudes para desempeñarse en la iniciativa privada, el sector público, en instituciones educativas como docente y centros de investigación. Además, tiene la capacidad para conducir una empresa existente e iniciar una nueva.</p>
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
                        Matemáticas para Ciencias Empresariales <br />
                        Introducción a las Ciencias Administrativas <br />
                        Introducción a la Contabilidad <br />
                        Historia del Pensamiento Filosófico <br />
                        Informática Empresarial
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
                        Probabilidad y Estadística Descriptiva <br />
                        Administración de Recursos Humanos I <br />
                        Contabilidad Financiera <br />
                        Teoría General de Sistemas <br />
                        Introducción al Derecho
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
                        Estadística Inferencial <br />
                        Administración de Recursos Humanos II <br />
                        Administración de Compras e Inventarios <br />
                        Contabilidad de Costos <br />
                        Derecho Mercantil
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
                        Fundamentos de la Mercadotecnia <br />
                        Matemáticas Financieras <br />
                        Microeconomía <br />
                        Metodología de la Investigación <br />
                        Derecho Laboral
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
                        Administración de Sueldos y Salarios <br />
                        Finanzas Empresariales I <br />
                        Macroeconomía <br />
                        Taller de Metodología de la Investigación <br />
                        Derecho Fiscal
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
                        Desarrollo Sustentable y Empresa <br />
                        Finanzas Empresariales II <br />
                        Investigación de Mercados <br />
                        Economía Internacional <br />
                        Sistemas de Información Gerencial
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
                        Investigación de Operaciones <br />
                        Planeación Estratégica <br />
                        Administración Estratégica de Ventas <br />
                        Sistema Financiero <br />
                        Economía del Sector Público Mexicano
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
                        Desarrollo Organizacional <br />
                        Dirección Comercial <br />
                        Emprendedurismo <br />
                        Presupuestos <br />
                        Desarrollo Regional
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
                        Cultura Empresarial <br />
                        Gestión de la Calidad <br />
                        Emprendimiento de Negocios <br />
                        Finanzas corporativas <br />
                        Comercio Exterior
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
                        Dirección y liderazgo <br />
                        Estrategia Publicitaria y Promocional <br />
                        Desarrollo y Evaluación de Proyectos de Inversión <br />
                        Toma de Decisiones Financieras <br />
                        Mercadotecnia Digital
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
