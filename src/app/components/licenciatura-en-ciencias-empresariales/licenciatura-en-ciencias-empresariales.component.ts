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
      title: 'PLAN DE ESTUDIOS',
      content: `
        <div class="plan-de-estudios-content">
  <table align="center" style="border-collapse: collapse; width: 800px; color: rgb(0, 0, 0); font-style: normal; font-weight: 400; text-align: start; white-space: normal; text-decoration: none; border: 1px solid #d3d3d3;">
    <tbody>
      <tr>
        <td style="border: 1px solid #d3d3d3; padding: 10px; width: 400px;">
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
        <td style="border: 1px solid #d3d3d3; padding: 10px; width: 400px;">
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
        <td style="border: 1px solid #d3d3d3; padding: 10px; width: 400px;">
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
        <td style="border: 1px solid #d3d3d3; padding: 10px; width: 400px;">
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
        <td style="border: 1px solid #d3d3d3; padding: 10px; width: 400px;">
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
        <td style="border: 1px solid #d3d3d3; padding: 10px; width: 400px;">
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
        <td style="border: 1px solid #d3d3d3; padding: 10px; width: 400px;">
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
        <td style="border: 1px solid #d3d3d3; padding: 10px; width: 400px;">
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
        <td style="border: 1px solid #d3d3d3; padding: 10px; width: 400px;">
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
        <td style="border: 1px solid #d3d3d3; padding: 10px; width: 400px;">
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
