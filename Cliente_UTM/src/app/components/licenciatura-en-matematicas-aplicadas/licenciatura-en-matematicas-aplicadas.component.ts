import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licenciatura-en-matematicas-aplicadas',
  templateUrl: './licenciatura-en-matematicas-aplicadas.component.html',
  styleUrls: ['./licenciatura-en-matematicas-aplicadas.component.css']
})
export class LicenciaturaEnMatematicasAplicadasComponent implements OnInit {
  
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
      title: 'PERFIL DE INGRESO',
      content: `
        
      `,
      isOpen: false
    },    
    {
      "title": "PERFIL DE EGRESO",
      "content": `
        
      `,
      "isOpen": false
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
  <table align="center" style="color: rgb(0, 0, 0); font-style: normal; font-weight: 400; text-align: start; white-space: normal; text-decoration: none; width: 100%; border-collapse: collapse; border: 1px solid #ccc;">
    <tbody>
      <tr style="background-color: #f2f2f2;">
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
      <tr style="background-color: #f2f2f2;">
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
      <tr style="background-color: #f2f2f2;">
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


}
