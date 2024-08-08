import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingenieria-en-mecatronica',
  templateUrl: './ingenieria-en-mecatronica.component.html',
  styleUrls: ['./ingenieria-en-mecatronica.component.css']
})
export class IngenieriaEnMecatronicaComponent implements OnInit {
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
                                Cálculo Diferencial e Integral <br />
                                Dibujo Asistido por Computadora <br />
                                Historia del Pensamiento Filosófico <br />
                                Expresión oral y escrita <br />
                                Programación estructurada
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
                                Ecuaciones Diferenciales <br />
                                Métodos Numéricos <br />
                                Estática <br />
                                Ingeniería de Materiales <br />
                                Electro - Magnetismo
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
                                Metrología y Transductores <br />
                                Mecanismos <br />
                                Electrónica Digital <br />
                                Circuitos Eléctricos II <br />
                                Electrónica Analógica
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
                                Control Clásico <br />
                                Micro - Controladores <br />
                                Máquinas Eléctricas <br />
                                Neumática e Hidráulica <br />
                                Termodinámica y Transferencia de Calor
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
                                Seminario de Investigación <br />
                                Optativa I <br />
                                Proyecto Integrador de Ingeniería Mecatrónica <br />
                                Optativa II <br />
                                Administración para Ingenieros
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
                <td colspan="2" style="border: 1px solid #ddd; padding: 10px;">
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
                                Elementos Finitos Aplicados a la Ingeniería <br />
                                Fundamentos de Inteligencia Artificial <br />
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
                                Robótica Móvil <br />
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


  
}
