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
      title: 'PLAN DE ESTUDIOS',
      content: `
        <div class="plan-de-estudios-content">
  <table align="center" style="color: rgb(0, 0, 0); font-style: normal; font-weight: 400; text-align: start; white-space: normal; text-decoration: none; width: 100%; border-collapse: collapse; border: 1px solid #d3d3d3;">
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
                Cálculo I <br />
                Mecánica para Ingeniería <br />
                Historia del pensamiento filosófico <br />
                Programación Estructurada <br />
                Fundamentos de Sistemas Electrónicos
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
                Análisis Vectorial <br />
                Ecuaciones Diferenciales <br />
                Circuitos Eléctricos I <br />
                Programación Orientada a Objetos <br />
                Construcción de Sistemas Electrónicos
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
                Química para Ingeniería <br />
                Métodos Numéricos <br />
                Circuitos Electrónicos <br />
                Sensores y Actuadores <br />
                Circuitos Digitales Reconfigurables
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
                Dirección de Empresas <br />
                Microcontroladores Avanzados <br />
                Máquinas Eléctricas <br />
                Procesamiento de Señales <br />
                Redes de Computadoras
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
                Arquitectura de Computadoras <br />
                Ingeniería de Sistemas Empotrados <br />
                Inteligencia Artificial <br />
                Redes Industriales <br />
                Optativa I
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
                Internet de la Cosas: Internet de las cosas<br />
                Electrónica de potencia: Energías Renovables <br />
                <strong>Optativa II</strong> <br />
                Internet de la Cosas: Análisis de Datos<br />
                Electrónica de potencia: Tópicos Selectos de Control<br />
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
