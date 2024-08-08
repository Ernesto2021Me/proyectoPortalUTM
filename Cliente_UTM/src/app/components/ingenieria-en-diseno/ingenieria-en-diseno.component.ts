import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingenieria-en-diseno',
  templateUrl: './ingenieria-en-diseno.component.html',
  styleUrls: ['./ingenieria-en-diseno.component.css']
})
export class IngenieriaEnDisenoComponent implements OnInit {
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
      title: 'PLAN DE ESTUDIOS',
      content: `
        <div class="plan-de-estudios-content">
  <table align="center" style="border-collapse: collapse; width: 100%; color: rgb(0, 0, 0); font-style: normal; font-weight: 400; text-align: start; white-space: normal; text-decoration: none; border: 1px solid #d3d3d3;">
    <tbody>
      <tr>
        <td style="border: 1px solid #d3d3d3; padding: 10px;">
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
        <td style="border: 1px solid #d3d3d3; padding: 10px;">
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
        <td style="border: 1px solid #d3d3d3; padding: 10px;">
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
        <td style="border: 1px solid #d3d3d3; padding: 10px;">
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
        <td style="border: 1px solid #d3d3d3; padding: 10px;">
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
        <td style="border: 1px solid #d3d3d3; padding: 10px;">
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
        <td style="border: 1px solid #d3d3d3; padding: 10px;">
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
        <td style="border: 1px solid #d3d3d3; padding: 10px;">
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
        <td style="border: 1px solid #d3d3d3; padding: 10px;">
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
        <td style="border: 1px solid #d3d3d3; padding: 10px;">
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
        <td colspan="2" style="border: 1px solid #d3d3d3; padding: 10px;">
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


 

}
