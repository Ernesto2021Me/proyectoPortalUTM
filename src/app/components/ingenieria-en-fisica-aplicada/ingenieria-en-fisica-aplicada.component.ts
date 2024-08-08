import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingenieria-en-fisica-aplicada',
  templateUrl: './ingenieria-en-fisica-aplicada.component.html',
  styleUrls: ['./ingenieria-en-fisica-aplicada.component.css']
})
export class IngenieriaEnFisicaAplicadaComponent implements OnInit {
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
          <p>Dr. Maxvell Jiménez Escamilla</p>
          <p><a href="mailto:jcfisicaaplicada@mixteco.utm.mx">jcfisicaaplicada@mixteco.utm.mx</a></p>
        </div>
      `,
      isOpen: false
    },
    {
      title: 'MISIÓN',
      content: `
        Formar profesionistas con un alto nivel de conocimiento integral apropiado a través de experiencias fundadas en las mejores prácticas educativas en el campo de la física. Altamente competitivos y capaces de modificar su entorno, solucionando e innovando con propuestas de desarrollo tecnológico. Dispuestos para continuar su formación científica realizando estudios de posgrado en el país o en el extranjero y contribuir a la transformación de la sociedad mexicana mediante el desarrollo de proyectos multidisciplinarios de alto impacto social.
      `,
      isOpen: false
    },    
    {
      title: 'VISIÓN',
      content: `
        La ingeniería en Física Aplicada participa activamente en el contexto regional y nacional, formando profesionistas con conocimientos sólidos en las áreas de física, matemáticas e ingeniería. Preparados para su inserción en el mercado laboral, dentro de los sectores industrial y de servicios; donde desarrollan actividades como docencia, consultoría, elaboración y gestión de proyectos de carácter científico y tecnológico haciendo uso de recursos federales, estatales y privados. Además, se enfoca en actividades que detonen el desarrollo regional. Dentro de sus prioridades de atención se encuentran:
        <ul>
          <li>Promover la movilidad estudiantil</li>
          <li>Disminuir la deserción escolar</li>
          <li>Incrementar el porcentaje de egresados</li>
          <li>Incrementar el porcentaje de titulación</li>
        </ul>
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
          <p><strong>Todo aspirante a cursar la carrera de Ingeniería en Física Aplicada en la UTM deberá tener las siguientes características en lo que respecta a conocimientos, habilidades y actitudes:</strong></p>
          <p><strong>Conocimientos:</strong></p>
          <ul>
            <li>Conocimientos de álgebra básica, trigonometría y geometría.</li>
          </ul>
          <p><strong>Habilidades básicas:</strong></p>
          <ul>
            <li>Realizar razonamientos y emitir juicios.</li>
            <li>Interpretar, plantear y resolver problemas.</li>
            <li>Trabajar en equipo y de forma individual.</li>
          </ul>
          <p><strong>Actitudes y valores:</strong></p>
          <ul>
            <li>Interés por el estudio de la física, las matemáticas y sus aplicaciones en la ingeniería.</li>
            <li>Curiosidad e inquietud por conocer y explicar los fenómenos físicos.</li>
            <li>Gusto por el razonamiento lógico y la abstracción.</li>
            <li>Actitud positiva y apertura a las incertidumbres en el conocimiento.</li>
            <li>Comprensión, respeto, aprecio y tolerancia hacia la diversidad.</li>
          </ul>
        </div>
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
        ...
      `, 
      isOpen: false 
    },
    {
      title: 'PLAN DE ESTUDIOS',
      content: `
        <div class="plan-de-estudios-content">
    <table align="center" style="color: rgb(0, 0, 0); font-style: normal; font-weight: 400; text-align: start; white-space: normal; text-decoration: none; width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
        <tbody>
            <tr>
                <td style="border: 1px solid #ddd; padding: 10px;">
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
                                Diseño y Análisis de Experimentos <br />
                                Historia del Pensamiento Filosófico <br />
                                Mecánica Clásica <br />
                                Tópicos de Álgebra y Geometría Analítica
                            </span>
                        </span>
                    </span>
                </td>
                <td style="border: 1px solid #ddd; padding: 10px;">
                    <div align="center">
                        <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                            <strong><font color="#410401">SEGUNDO SEMESTRE</font></strong>
                        </span>
                    </div>
                    <br />
                    <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                        <span style="background-color:#ffffff;">
                            <span style="display:inline !important;">
                                Álgebra Lineal <br />
                                Cálculo Integral <br />
                                Mecánica Vectorial para Ingenieros <br />
                                Programación Estructurada <br />
                                Teoría General de Sistemas
                            </span>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 10px;">
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
                                Ecuaciones Diferenciales Ordinarias <br />
                                Electromagnetismo <br />
                                Fundamentos de Electrónica <br />
                                Química General
                            </span>
                        </span>
                    </span>
                </td>
                <td style="border: 1px solid #ddd; padding: 10px;">
                    <div align="center">
                        <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                            <strong><font color="#410401">CUARTO SEMESTRE</font></strong>
                        </span>
                    </div>
                    <br />
                    <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                        <span style="background-color:#ffffff;">
                            <span style="display:inline !important;">
                                Análisis Numérico <br />
                                Dibujo Asistido por Computadora <br />
                                Física Ondulatoria <br />
                                Instrumentación Electrónica <br />
                                Métodos Matemáticos de la Física I
                            </span>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 10px;">
                    <div align="center">
                        <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                            <strong><font color="#410401">QUINTO SEMESTRE</font></strong>
                        </span>
                    </div>
                    <br />
                    <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                        <span style="background-color:#ffffff;">
                            <span style="display:inline !important;">
                                Física Moderna <br />
                                Mecánica Analítica <br />
                                Métodos Matemáticos de la Física II <br />
                                Procesos de Manufactura <br />
                                Termodinámica
                            </span>
                        </span>
                    </span>
                </td>
                <td style="border: 1px solid #ddd; padding: 10px;">
                    <div align="center">
                        <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                            <strong><font color="#410401">SEXTO SEMESTRE</font></strong>
                        </span>
                    </div>
                    <br />
                    <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                        <span style="background-color:#ffffff;">
                            <span style="display:inline !important;">
                                Introducción a la Administración <br />
                                Mecánica Cuántica <br />
                                Probabilidad y Estadística <br />
                                Química Orgánica <br />
                                Teoría Electromagnética
                            </span>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 10px;">
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
                                Formulación y Evaluación de Proyectos <br />
                                Mecánica de Fluidos <br />
                                Óptica Moderna <br />
                                Sensores y Transductores
                            </span>
                        </span>
                    </span>
                </td>
                <td style="border: 1px solid #ddd; padding: 10px;">
                    <div align="center">
                        <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                            <strong><font color="#410401">OCTAVO SEMESTRE</font></strong>
                        </span>
                    </div>
                    <br />
                    <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                        <span style="background-color:#ffffff;">
                            <span style="display:inline !important;">
                                Física Estadística <br />
                                Gestión Empresarial <br />
                                Procesamiento de Señales Discretas <br />
                                Productos de Ingeniería <br />
                                Transferencia de Calor
                            </span>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 10px;">
                    <div align="center">
                        <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                            <strong><font color="#410401">NOVENO SEMESTRE</font></strong>
                        </span>
                    </div>
                    <br />
                    <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                        <span style="background-color:#ffffff;">
                            <span style="display:inline !important;">
                                Ciencia de Materiales <br />
                                Física del Estado Sólido <br />
                                Metodología de la Investigación <br />
                                Modelación de Sistemas Dinámicos <br />
                                Optativa I
                            </span>
                        </span>
                    </span>
                </td>
                <td style="border: 1px solid #ddd; padding: 10px;">
                    <div align="center">
                        <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                            <strong><font color="#410401">DÉCIMO SEMESTRE</font></strong>
                        </span>
                    </div>
                    <br />
                    <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                        <span style="background-color:#ffffff;">
                            <span style="display:inline !important;">
                                Energía y Medio Ambiente <br />
                                Nanotecnología <br />
                                Proyectos de Ingeniería Física <br />
                                Tópicos de Física Computacional <br />
                                Optativa II
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
