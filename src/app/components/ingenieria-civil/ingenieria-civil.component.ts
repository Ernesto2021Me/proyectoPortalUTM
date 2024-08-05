import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingenieria-civil',
  templateUrl: './ingenieria-civil.component.html',
  styleUrls: ['./ingenieria-civil.component.css']
})
export class IngenieriaCivilComponent implements OnInit {
  accordionPanels = [
    { 
      title: 'JEFATURA DE CARRERA', 
      content: `
        <div class="jefatura-carrera-content">
          <p>Dr. Héctor Gerardo Campos Silva</p>
          <p><a href="mailto:jccivil@mixteco.utm.mx">jccivil@mixteco.utm.mx</a></p>
        </div>
      `, 
      isOpen: false 
    },
    { 
      title: 'MISIÓN', 
      content: `
        <div class="mision-content">
          <p>Formar profesionales altamente capacitados en el área de Ingeniería Civil, que ayuden a contribuir mediante el desarrollo de investigaciones y de la educación superior a la independencia económica, científica, tecnológica y cultural del estado y del país; despertando en los individuos el amor y el respeto al trabajo, la mentalidad tecnológica, el espíritu emprendedor y el sentido de solidaridad y corresponsabilidad social. Siendo esta carrera parte de una institución concebida como un instrumento cultural de transformación del entorno social, para el desarrollo de sus funciones sustantivas de docencia, investigación, difusión de la cultura y promoción del desarrollo.</p>
        </div>
      `, 
      isOpen: false 
    },    
    { 
      title: 'VISIÓN', 
      content: `
        <div class="vision-content">
          <p>En concordancia con nuestra institución educativa, ser la carrera de Ingeniería Civil líder en el estado de Oaxaca, en el ámbito académico y de investigación que forme integralmente individuos para el ejercicio de su profesión, en el campo de la ciencia y la tecnología, habiéndolos sumergido en un medio cultural que haya forjado su personalidad, desarrollado su sentido crítico y vocación democrática, fomentando constantemente la dignificación del trabajo, la honestidad personal, la firmeza de carácter y el respeto a los valores nacionales.</p>
        </div>
      `, 
      isOpen: false 
    },    
    { 
      title: 'OBJETIVO', 
      content: `
        <div class="objetivo-content">
          <p>Formar Ingenieros Civiles con las habilidades necesarias para desempeñarse con ética, profesionalismo y responsabilidad, con competencias de liderazgo y trabajo en equipo. Capaces de diseñar, planear, administrar, construir y conservar infraestructura con énfasis en el análisis sísmico, contribuyendo al desarrollo de la sociedad en que se encuentre inmerso.</p>
        </div>
      `, 
      isOpen: false 
    },    
    { 
      title: 'PERFIL DE INGRESO', 
      content: `
        <div class="perfil-ingreso-content">
          <p>Los aspirantes por ingresar al Programa en Ingeniería Civil de la Universidad Tecnológica de la Mixteca, deberán haber cursado y aprobado su formación de bachillerato con inclinación a las Ciencias Físico Matemáticas, con el fin de garantizar previamente la asimilación de contenidos programáticos propios de la Ingeniería Civil.</p>
          <p>Asimismo, poseer:</p>
          <ul>
            <li>Conocimientos básicos en el manejo de computadoras y el manejo de algoritmos para la solución de problemas.</li>
            <li>Capacidad para la lectura y comprensión de textos.</li>
            <li>Actitud de compromiso al trabajo, con disciplina y orden.</li>
            <li>Responsabilidad, honestidad, paciencia, ética, amistad, trato cordial, relaciones armónicas y comunicación respetuosa.</li>
            <li>Respeto a las personas sin distingo de condición social, de género y económica.</li>
            <li>Compromiso con la preservación y mejoramiento del medio ambiente.</li>
          </ul>
        </div>
      `, 
      isOpen: false 
    },    
    { 
      title: 'PERFIL DE EGRESO', 
      content: `
        <div class="perfil-egreso-content">
          <p><strong>El Ingeniero Civil será capaz de diseñar, planear, administrar, construir y conservar infraestructura con énfasis en el análisis sísmico, contribuyendo al desarrollo de la sociedad en que se encuentre inmerso.</strong></p>
          <p>El Ingeniero Civil de la UTM deberá:</p>
          <ul>
            <li>Ser capaz de aplicar los conocimientos de las ciencias básicas para identificar, formular y solucionar problemas de ingeniería civil que respondan a necesidades específicas de proyectos de infraestructura.</li>
            <li>Poseer habilidades para diseñar, planear, administrar, construir y conservar infraestructura con énfasis en el análisis sísmico.</li>
            <li>Dominar el análisis de datos experimentales derivados de pruebas de laboratorio para la evaluación de las propiedades mecánicas de los materiales de construcción.</li>
            <li>Ser capaz de formular e interpretar reportes técnicos mediante la aplicación de criterios estandarizados de la ingeniería civil para formular conclusiones que sustenten la toma de decisiones.</li>
            <li>Poseer la capacidad y el compromiso para integrar y organizar grupos de trabajo multidisciplinarios.</li>
            <li>Manejar el uso de tecnologías de la información a través de herramientas, equipos y software especializados para facilitar su desempeño profesional.</li>
            <li>Actuar con profesionalismo, ética, compromiso y cuidado del entorno para contribuir al desarrollo de una mejor sociedad.</li>
          </ul>
        </div>
      `, 
      isOpen: false 
    },    
    { 
      title: 'CAMPO DE ACCIÓN', 
      content: `
        <div class="campo-de-accion-content">
          <p>El campo laboral de un Ingeniero Civil es realmente amplio y totalmente relacionado con el sector de la construcción, pudiéndose desempeñar de manera amplia como diseñador, consultor, constructor, interventor, gerente, docente o investigador. Algunos de los sitios donde se desarrolla el Ingeniero Civil, son:</p>
          <ul>
            <li>En consultoría privada y peritaje.</li>
            <li>En el sector público, realizando y supervisando obras del estado o las instituciones estatales.</li>
            <li>Empresas, instituciones y organizaciones dedicadas a la construcción.</li>
            <li>En proyectos viales, de transporte, carreteras, puentes, ferrocarriles, puertos, aeropuertos, pavimentos, estructuras de contención, obras de estabilización y túneles.</li>
            <li>En proyectos urbanos, construcción de avenidas, parques, espacios públicos, edificios, viviendas, auditorios, coliseos y estadios, entre otros.</li>
            <li>En proyectos relacionados con la hidráulica, saneamiento, agua potable, proyectos de riego, canales de agua, acueductos, alcantarillados, ejecución de presas, represas, vertederos, puertos marítimos y embalses.</li>
            <li>Saneamiento ambiental, sistemas de remediación y monitoreo de contaminación.</li>
            <li>Obras de protección de taludes, de laderas y cuencas, mitigación de amenazas naturales tales como terremotos, inundaciones y erupciones volcánicas y obras de control ambiental.</li>
            <li>Proyectos de electrificación e infraestructura de centrales hidroeléctricas.</li>
            <li>Institutos de investigación y estudios de posgrado en el desarrollo de nuevos materiales y/o procedimientos de construcción.</li>
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
                        CÁLCULO DIFERENCIAL E INTEGRAL <br />
                        GEOMETRÍA DESCRIPTIVA <br />
                        PROGRAMACIÓN ESTRUCTURADA <br />
                        ESTÁTICA <br />
                        HISTORIA DEL PENSAMIENTO FILOSÓFICO
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
                        ÁLGEBRA LINEAL <br />
                        CÁLCULO VECTORIAL <br />
                        DIBUJO ASISTIDO POR COMPUTADORA <br />
                        DINÁMICA <br />
                        TEORÍA GENERAL DE SISTEMAS
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
                        ECUACIONES DIFERENCIALES <br />
                        QUÍMICA <br />
                        TOPOGRAFÍA <br />
                        ESTRUCTURAS ISOSTÁTICAS <br />
                        RESISTENCIA DE MATERIALES I
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
                        MÉTODOS NUMÉRICOS <br />
                        GEOLOGÍA <br />
                        GEOMÁTICA <br />
                        ESTRUCTURAS HIPERESTÁTICAS <br />
                        RESISTENCIA DE MATERIALES II
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
                        PROBABILIDAD Y ESTADÍSTICA <br />
                        MECÁNICA DE SUELOS I <br />
                        VÍAS TERRESTRES DE COMUNICACIÓN <br />
                        ESTRUCTURAS DE CONCRETO <br />
                        HIDRÁULICA
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
                        MATERIALES DE CONSTRUCCIÓN <br />
                        MECÁNICA DE SUELOS II <br />
                        TERRACERÍAS Y PAVIMENTOS <br />
                        ESTRUCTURAS DE ACERO <br />
                        HIDRÁULICA DE CANALES
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
                        PROCESOS CONSTRUCTIVOS <br />
                        MECÁNICA DE ROCAS <br />
                        TECNOLOGÍA DEL CONCRETO Y DETERIORO DE ESTRUCTURAS <br />
                        INGENIERÍA DE SISMOS <br />
                        HIDROLOGÍA
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
                        MOVIMIENTOS DE SUELOS Y MAQUINARIA <br />
                        CIMENTACIONES <br />
                        ESTRUCTURAS DE MAMPOSTERÍA <br />
                        OBRAS HIDRÁULICAS <br />
                        REDES DE AGUA POTABLE Y ALCANTARILLADO
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
                        DISEÑO DE PUENTES <br />
                        COSTOS Y PRESUPUESTOS <br />
                        INSTALACIONES ELÉCTRICAS <br />
                        OPTATIVA 1 <br />
                        OPTATIVA 2
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
                        ADMINISTRACIÓN DE LA CONSTRUCCIÓN <br />
                        DESARROLLO URBANO <br />
                        INGENIERÍA AMBIENTAL <br />
                        OPTATIVA 3 <br />
                        OPTATIVA 4
                      </span>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div align="center">
                    <span style="font-size:12px; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                      <strong><font color="#410401">OPTATIVAS</font></strong>
                    </span>
                  </div>
                  <br />
                  <span style="font-size:12px; text-align:start; color:#000000; font-family:Arial, Helvetica, sans-serif;">
                    <span style="background-color:#ffffff;">
                      <span style="display:inline !important;">
                        ESPECIALIDAD ESTRUCTURAS Y SISMICIDAD <br />
                        - DISEÑO AVANZADO DE ESTRUCTURAS DE CONCRETO <br />
                        - SISMOLOGÍA <br />
                        - DISEÑO AVANZADO DE ESTRUCTURAS DE ACERO <br />
                        - MODELACIÓN Y SISMICIDAD INDUCIDA <br />
                        ESPECIALIDAD ÁREA ADMINISTRATIVA <br />
                        - CONTABILIDAD Y COSTOS <br />
                        - LICITACIONES <br />
                        - DIRECCIÓN DE OBRA <br />
                        - EVALUACIÓN DE PROYECTOS <br />
                        ESPECIALIDAD VÍAS TERRESTRES <br />
                        - DISEÑO GEOMÉTRICO DE VIALIDADES I <br />
                        - TRANSPORTE E INGENIERÍA EN TRÁNSITO <br />
                        - DISEÑO DE MEZCLAS ASFÁLTICAS <br />
                        - DISEÑO GEOMÉTRICO DE VIALIDADES II
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
