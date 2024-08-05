import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './components/web/web.component';
import { HomeComponent } from './components/home/home.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { DirectorioComponent } from './components/directorio/directorio.component';
import { EnsenanzaComponent } from './components/ensenanza/ensenanza.component';
import { UTMComponent } from './components/utm/utm.component';
import { DesarrolloComponent } from './components/desarrollo/desarrollo.component';
import { CorreoElectronicoComponent } from './components/correo-electronico/correo-electronico.component';
import { ModeloEducativoComponent } from './components/modelo-educativo/modelo-educativo.component';
import { PremiosReconocimientosComponent } from './components/premios-reconocimientos/premios-reconocimientos.component';
import { EstructuraGeneralComponent } from './components/estructura-general/estructura-general.component';
import { LegislacionUniversitariaComponent } from './components/legislacion-universitaria/legislacion-universitaria.component';
import { NuestraUniversidadComponent } from './components/nuestra-universidad/nuestra-universidad.component';
import { InvestigacionComponent } from './components/investigacion/investigacion.component';
import { CulturaComponent } from './components/cultura/cultura.component';
import { InstitutoDeComputacionComponent } from './components/instituto-de-computacion/instituto-de-computacion.component';
import { InstitutoDeDisenoComponent } from './components/instituto-de-diseno/instituto-de-diseno.component';
import { InstitutoDeFisicaMatematicasComponent } from './components/instituto-de-fisica-matematicas/instituto-de-fisica-matematicas.component';
import { InstitutoDeAgroindustriasComponent } from './components/instituto-de-agroindustrias/instituto-de-agroindustrias.component';
import { InstitutoDeMineriaComponent } from './components/instituto-de-mineria/instituto-de-mineria.component';
import { InstitutoDeHidrologiaComponent } from './components/instituto-de-hidrologia/instituto-de-hidrologia.component';
import { InstitutoDeElectronicaYMecatronicaComponent } from './components/instituto-de-electronica-y-mecatronica/instituto-de-electronica-y-mecatronica.component';
import { InstitutoDeCienciasSocialesYHumanidadesComponent } from './components/instituto-de-ciencias-sociales-y-humanidades/instituto-de-ciencias-sociales-y-humanidades.component';
import { InstitutoDeIngenieriaIndustrialYAutomotrizComponent } from './components/instituto-de-ingenieria-industrial-y-automotriz/instituto-de-ingenieria-industrial-y-automotriz.component';
import { InstitutosDeInvestigacionComponent } from './components/institutos-de-investigacion/institutos-de-investigacion.component';
import { CentroDeEstudiosDeNuevosMaterialesComponent } from './components/centro-de-estudios-de-nuevos-materiales/centro-de-estudios-de-nuevos-materiales.component';
import { LicienciaturasComponent } from './components/licienciaturas/licienciaturas.component';
import { PosgradosComponent } from './components/posgrados/posgrados.component';
import { IngenieriaEnComputacionComponent } from './components/ingenieria-en-computacion/ingenieria-en-computacion.component';
import { IngenieriaEnAlimentosComponent } from './components/ingenieria-en-alimentos/ingenieria-en-alimentos.component';
import { IngenieriaEnDisenoComponent } from './components/ingenieria-en-diseno/ingenieria-en-diseno.component';
import { IngenieriaEnElectronicaComponent } from './components/ingenieria-en-electronica/ingenieria-en-electronica.component';
import { IngenieriaEnFisicaAplicadaComponent } from './components/ingenieria-en-fisica-aplicada/ingenieria-en-fisica-aplicada.component';
import { IngenieriaMecanicaAutomotrizComponent } from './components/ingenieria-mecanica-automotriz/ingenieria-mecanica-automotriz.component';
import { IngenieriaEnMecatronicaComponent } from './components/ingenieria-en-mecatronica/ingenieria-en-mecatronica.component';
import { IngenieriaIndustrialComponent } from './components/ingenieria-industrial/ingenieria-industrial.component';
import { LicenciaturaEnMatematicasAplicadasComponent } from './components/licenciatura-en-matematicas-aplicadas/licenciatura-en-matematicas-aplicadas.component';
import { LicenciaturaEnCienciasEmpresarialesComponent } from './components/licenciatura-en-ciencias-empresariales/licenciatura-en-ciencias-empresariales.component';
import { IngenieriaCivilComponent } from './components/ingenieria-civil/ingenieria-civil.component';
import { CampusHuajuapanInstitutosComponent } from './components/campus-huajuapan-institutos/campus-huajuapan-institutos.component';
import { CampusHuajuapanLicenciaturasComponent } from './components/campus-huajuapan-licenciaturas/campus-huajuapan-licenciaturas.component';
import { IngresoALicenciaturaComponent } from './components/ingreso-a-licenciatura/ingreso-a-licenciatura.component';
import { IngresoAPosgradoComponent } from './components/ingreso-a-posgrado/ingreso-a-posgrado.component';
import { BecasComponent } from './components/becas/becas.component';
import { ServiciosEscolaresComponent } from './components/servicios-escolares/servicios-escolares.component';
import { CampusHuajuapanPosgradosComponent } from './components/campus-huajuapan-posgrados/campus-huajuapan-posgrados.component';
import { MaestriaEnAdministracionDeNegociosComponent } from './components/maestria-en-administracion-de-negocios/maestria-en-administracion-de-negocios.component';
import { MaestriaEnCienciasDeMaterialesComponent } from './components/maestria-en-ciencias-de-materiales/maestria-en-ciencias-de-materiales.component';
import { MaestriaEnCienciasProductosNaturalesYAlimentacionComponent } from './components/maestria-en-ciencias-productos-naturales-y-alimentacion/maestria-en-ciencias-productos-naturales-y-alimentacion.component';
import { MaestriaEnDisenoDeModasComponent } from './components/maestria-en-diseno-de-modas/maestria-en-diseno-de-modas.component';
import { MaestriaEnDisenoDeMueblesComponent } from './components/maestria-en-diseno-de-muebles/maestria-en-diseno-de-muebles.component';
import { MaestriaEnElectronicaOpcionSistemasInteligentesComponent } from './components/maestria-en-electronica-opcion-sistemas-inteligentes/maestria-en-electronica-opcion-sistemas-inteligentes.component';
import { MaestriaEnModelacionMatematicaComponent } from './components/maestria-en-modelacion-matematica/maestria-en-modelacion-matematica.component';
import { MaestriaEnRoboticaComponent } from './components/maestria-en-robotica/maestria-en-robotica.component';
import { MaestriaEnTecnologiaAvanzadaDeManufacturaComponent } from './components/maestria-en-tecnologia-avanzada-de-manufactura/maestria-en-tecnologia-avanzada-de-manufactura.component';
import { DoctoradoEnElectronicaOpcionSistemasInteligentesComponent } from './components/doctorado-en-electronica-opcion-sistemas-inteligentes/doctorado-en-electronica-opcion-sistemas-inteligentes.component';
import { DoctoradoEnModelacionMatematicaComponent } from './components/doctorado-en-modelacion-matematica/doctorado-en-modelacion-matematica.component';
import { DoctoradoEnInteligenciaArtificialComponent } from './components/doctorado-en-inteligencia-artificial/doctorado-en-inteligencia-artificial.component';
import { DoctoradoEnCienciasProductosNaturalesYAlimentosComponent } from './components/doctorado-en-ciencias-productos-naturales-y-alimentos/doctorado-en-ciencias-productos-naturales-y-alimentos.component';
import { DoctoradoEnRoboticaComponent } from './components/doctorado-en-robotica/doctorado-en-robotica.component';
import { MaestriaEnInteligenciaArtificialComponent } from './components/maestria-en-inteligencia-artificial/maestria-en-inteligencia-artificial.component';
import { MaestriaEnIngenieriaDeSoftwareComponent } from './components/maestria-en-ingenieria-de-software/maestria-en-ingenieria-de-software.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { RectoriaComponent } from './components/rectoria/rectoria.component';
import { ViceRectoriaComponent } from './components/vice-rectoria/vice-rectoria.component';
import { DivisionDeEstudiosDePosgradoComponent } from './components/division-de-estudios-de-posgrado/division-de-estudios-de-posgrado.component';
import { DirectoresDeInstitutoComponent } from './components/directores-de-instituto/directores-de-instituto.component';
import { JefesDeCarreraComponent } from './components/jefes-de-carrera/jefes-de-carrera.component';
import { PersonalAdministrativoComponent } from './components/personal-administrativo/personal-administrativo.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { LibrosComponent } from './components/libros/libros.component';
import { LibreriasComponent } from './components/librerias/librerias.component';
import { ActividadesCulturalesYDeportivasComponent } from './components/actividades-culturales-y-deportivas/actividades-culturales-y-deportivas.component';
import { AproximacionEspectrocospiaComponent } from './components/aproximacion-espectrocospia/aproximacion-espectrocospia.component';
import { ModelOfUniversityComponent } from './components/model-of-university/model-of-university.component';
import { NuevoModeloUniversidadComponent } from './components/nuevo-modelo-universidad/nuevo-modelo-universidad.component';
import { SignificadoDeLosSuenosComponent } from './components/significado-de-los-suenos/significado-de-los-suenos.component';
import { CaminosDeLaHistoriaMixtecaComponent } from './components/caminos-de-la-historia-mixteca/caminos-de-la-historia-mixteca.component';
import { RaicesMixtecasComponent } from './components/raices-mixtecas/raices-mixtecas.component';
import { NuuSaviComponent } from './components/nuu-savi/nuu-savi.component';
import { PasadoPresenteCulturaMixtecaComponent } from './components/pasado-presente-cultura-mixteca/pasado-presente-cultura-mixteca.component';
import { TierraSolLunaComponent } from './components/tierra-sol-luna/tierra-sol-luna.component';
import { PresenciasCulturaMixtecaComponent } from './components/presencias-cultura-mixteca/presencias-cultura-mixteca.component';
import { PersonajesInstitucionesPuebloDeMexicoComponent } from './components/personajes-instituciones-pueblo-de-mexico/personajes-instituciones-pueblo-de-mexico.component';
import { ViviendaTradicionalMixtecaComponent } from './components/vivienda-tradicional-mixteca/vivienda-tradicional-mixteca.component';
import { ModeloBalancesHidricosComponent } from './components/modelo-balances-hidricos/modelo-balances-hidricos.component';
import { NuevaCartaNacionesUnidasComponent } from './components/nueva-carta-naciones-unidas/nueva-carta-naciones-unidas.component';
import { NewCharterComponent } from './components/new-charter/new-charter.component';
import { ElAguaComponent } from './components/el-agua/el-agua.component';
import { HuajuapanLeonOaxacaComponent } from './components/huajuapan-leon-oaxaca/huajuapan-leon-oaxaca.component';
import { ElectronicaYComputacionComponent } from './components/electronica-y-computacion/electronica-y-computacion.component';
import { InteligenciaArtificialMexicoComponent } from './components/inteligencia-artificial-mexico/inteligencia-artificial-mexico.component';
import { CentroActividadesCulturalesComponent } from './components/centro-actividades-culturales/centro-actividades-culturales.component';
import { CursosConferenciasComponent } from './components/cursos-conferencias/cursos-conferencias.component';
import { CongresosYSeminariosComponent } from './components/congresos-y-seminarios/congresos-y-seminarios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProfesoresInvestigadoresComponent } from './components/profesores-investigadores/profesores-investigadores.component';
import { InvestigadoresICComponent } from './components/investigadores-ic/investigadores-ic.component';
import { CampusHuajuapanInvestigadoresComponent } from './components/campus-huajuapan-investigadores/campus-huajuapan-investigadores.component';
import { InvestigadoresIMEComponent } from './components/investigadores-ime/investigadores-ime.component';
import { InvestigadoresIAComponent } from './components/investigadores-ia/investigadores-ia.component';
import { InvestigadoresIFMComponent } from './components/investigadores-ifm/investigadores-ifm.component';
import { InvestigadoresIDComponent } from './components/investigadores-id/investigadores-id.component';
import { InvestigadoresICSHComponent } from './components/investigadores-icsh/investigadores-icsh.component';
import { InvestigadoresIHComponent } from './components/investigadores-ih/investigadores-ih.component';
import { InvestigadoresIMComponent } from './components/investigadores-im/investigadores-im.component';
import { InvestigadoresIIIAComponent } from './components/investigadores-iiia/investigadores-iiia.component';
import { InvestigadoresDEPGComponent } from './components/investigadores-depg/investigadores-depg.component';
import { InvestigadoresCENMComponent } from './components/investigadores-cenm/investigadores-cenm.component';
import { InvestigadoresCPDComponent } from './components/investigadores-cpd/investigadores-cpd.component';
import { InvestigadoresCIComponent } from './components/investigadores-ci/investigadores-ci.component';
import { InvestigadoresPCCComponent } from './components/investigadores-pcc/investigadores-pcc.component';
import { BibliotecasComponent } from './components/bibliotecas/bibliotecas.component';
const routes: Routes = [
  {
    path: "",
    redirectTo: "/home/web",
    pathMatch: "full"
  },{
  path: 'pruebas', component:PruebasComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'web', component: WebComponent },
      {
        path: 'nuestra_universidad',
        component: NuestraUniversidadComponent,
       },
          { path: 'nuestra_universidad/historia', component: HistoriaComponent },
          { path: 'nuestra_universidad/que_es_la_utm', component: UTMComponent },
          { path: 'nuestra_universidad/correo_electronico', component: CorreoElectronicoComponent },
          { path: 'nuestra_universidad/contacto', component: ContactoComponent },
          { path: 'nuestra_universidad/modelo_educativo', component: ModeloEducativoComponent },
          { path: 'nuestra_universidad/premios_reconocimientos', component: PremiosReconocimientosComponent },
          { path: 'nuestra_universidad/estructura_general', component: EstructuraGeneralComponent },
          { path: 'nuestra_universidad/legislacion_universitaria', component: LegislacionUniversitariaComponent },
     
          { path: 'directorio', component: DirectorioComponent },
      { path: 'directorio/rectoria', component: RectoriaComponent},
      { path: 'directorio/vice_rectorias', component: ViceRectoriaComponent},
      { path: 'directorio/division_de_estudios_de_posgrado', component: DivisionDeEstudiosDePosgradoComponent},
      { path: 'directorio/directores_de_institutos', component: DirectoresDeInstitutoComponent},
      { path: 'directorio/jefes_de_carreras', component: JefesDeCarreraComponent},
      { path: 'directorio/personal_administrativo', component: PersonalAdministrativoComponent},
      { path: 'directorio/profesores', component: ProfesoresInvestigadoresComponent},
      { path: 'directorio/profesores/huajuapan_de_leon', component: CampusHuajuapanInvestigadoresComponent},
      { path: 'directorio/profesores/instituto_de_computacion', component: InvestigadoresICComponent},
      { path: 'directorio/profesores/instituto_de_electronica_y_mecatronica', component: InvestigadoresIMEComponent},
      { path: 'directorio/profesores/instituto_de_agroindustrias', component: InvestigadoresIAComponent},
      { path: 'directorio/profesores/instituto_de_fisica_y_matematicas', component: InvestigadoresIFMComponent},
      { path: 'directorio/profesores/instituto_de_diseno', component: InvestigadoresIDComponent},
      { path: 'directorio/profesores/instituto_de_ciencias_sociales_y_humanidades', component: InvestigadoresICSHComponent},
      { path: 'directorio/profesores/instituto_de_hidrologia', component: InvestigadoresIHComponent},
      { path: 'directorio/profesores/instituto_de_minera', component: InvestigadoresIMComponent},
      { path: 'directorio/profesores/instituto_de_ingenieria_industrial_y_automotriz', component: InvestigadoresIIIAComponent},
      { path: 'directorio/profesores/division_de_estudios_de_postgrado', component: InvestigadoresDEPGComponent},
      { path: 'directorio/profesores/centro_de_estudios_de_nuevos_materiales', component: InvestigadoresCENMComponent},
      { path: 'directorio/profesores/coordinacion_de_promocion_del_desarrollo', component: InvestigadoresCPDComponent},
      { path: 'directorio/profesores/centro_de_idiomas', component: InvestigadoresCIComponent},
      { path: 'directorio/profesores/profesores_de_catedras_conacyt', component: InvestigadoresPCCComponent},

     

      { path: 'ensenanza', component: EnsenanzaComponent },
               { path: 'ensenanza/licenciaturas', component: LicienciaturasComponent },
               { path: 'ensenanza/licenciaturas/huajuapan_de_leon', component: CampusHuajuapanLicenciaturasComponent },
                   { path: 'ensenanza/licenciaturas/ingenieria_en_computacion', component: IngenieriaEnComputacionComponent},
                   { path: 'ensenanza/licenciaturas/ingenieria_en_alimentos', component: IngenieriaEnAlimentosComponent},
                   { path: 'ensenanza/licenciaturas/ingenieria_en_diseno', component: IngenieriaEnDisenoComponent},
                   { path: 'ensenanza/licenciaturas/ingenieria_en_electronica', component: IngenieriaEnElectronicaComponent},
                   { path: 'ensenanza/licenciaturas/ingenieria_en_fisica_aplicada', component: IngenieriaEnFisicaAplicadaComponent},
                   { path: 'ensenanza/licenciaturas/ingenieria_en_mecatronica', component: IngenieriaEnMecatronicaComponent},
                   { path: 'ensenanza/licenciaturas/ingenieria_en_mecanica_automotriz', component: IngenieriaMecanicaAutomotrizComponent},
                   { path: 'ensenanza/licenciaturas/licenciatura_en_matematicas_aplicadas', component: LicenciaturaEnMatematicasAplicadasComponent},
                   { path: 'ensenanza/licenciaturas/licenciatura_en_ciencias_empresariales', component: LicenciaturaEnCienciasEmpresarialesComponent},
                   { path: 'ensenanza/licenciaturas/ingenieria_industrial', component: IngenieriaIndustrialComponent},
                   { path: 'ensenanza/licenciaturas/ingenieria_civil', component: IngenieriaCivilComponent},
                                         
                  
               { path: 'ensenanza/posgrados', component: PosgradosComponent },
               { path: 'ensenanza/posgrados/huajuapan_de_leon', component: CampusHuajuapanPosgradosComponent},
                    { path: 'ensenanza/posgrados/maestria_en_administracion_negocios', component: MaestriaEnAdministracionDeNegociosComponent},
                    { path: 'ensenanza/posgrados/maestria_en_ciencias_materiales', component: MaestriaEnCienciasDeMaterialesComponent},
                    { path: 'ensenanza/posgrados/maestria_en_ciencias_productos_naturales_alimentacion', component: MaestriaEnCienciasProductosNaturalesYAlimentacionComponent},
                    { path: 'ensenanza/posgrados/maestria_en_diseno_modas', component: MaestriaEnDisenoDeModasComponent},
                    { path: 'ensenanza/posgrados/maestria_en_diseno_muebles', component: MaestriaEnDisenoDeMueblesComponent},
                    { path: 'ensenanza/posgrados/maestria_en_electronica_en_sistemas_inteligentes', component: MaestriaEnElectronicaOpcionSistemasInteligentesComponent},
                    { path: 'ensenanza/posgrados/maestria_en_modelacion_matematica"', component: MaestriaEnModelacionMatematicaComponent},
                    { path: 'ensenanza/posgrados/maestria_en_robotica', component: MaestriaEnRoboticaComponent},
                    { path: 'ensenanza/posgrados/maestria_en_tecnologia_avanzada_de_manufactura', component: MaestriaEnTecnologiaAvanzadaDeManufacturaComponent},
                    { path: 'ensenanza/posgrados/doctorado_en_ciencias_productos_naturales_alimentos', component: DoctoradoEnCienciasProductosNaturalesYAlimentosComponent},
                    { path: 'ensenanza/posgrados/doctorado_en_electronica_especialidad_sistemas_inteligentes_aplicados', component: DoctoradoEnElectronicaOpcionSistemasInteligentesComponent},
                    { path: 'ensenanza/posgrados/doctorado_en_inteligencia_artificial', component: DoctoradoEnInteligenciaArtificialComponent},
                    { path: 'ensenanza/posgrados/doctorado_en_modelacion_matematica', component: DoctoradoEnModelacionMatematicaComponent},
                    { path: 'ensenanza/posgrados/doctorado_en_robotica', component: DoctoradoEnRoboticaComponent},
                    { path: 'ensenanza/posgrados/maestria_en_inteligencia_artificial', component: MaestriaEnInteligenciaArtificialComponent},
                    { path: 'ensenanza/posgrados/maestria_en_ingenieria_de_software', component: MaestriaEnIngenieriaDeSoftwareComponent},


                {path: 'ensenanza/ingreso_a_licenciatura',component:IngresoALicenciaturaComponent},    
                {path: 'ensenanza/ingreso_a_posgrado',component:IngresoAPosgradoComponent},   
                {path: 'ensenanza/becas',component:BecasComponent},   
                {path: 'ensenanza/servicios_escolares',component:ServiciosEscolaresComponent},     
                {path: 'ensenanza/bibliotecas',component:BibliotecasComponent},         
                { path: 'promocion_del_desarrollo', component: DesarrolloComponent },
        { path: 'investigacion', component: InvestigacionComponent },
         
        {path: 'investigacion/institutos_de_investigacion', component: InstitutosDeInvestigacionComponent},
        {path: 'investigacion/institutos_de_investigacion/huajuapan_de_leon', component: CampusHuajuapanInstitutosComponent},
         {path: 'investigacion/institutos_de_investigacion/instituto_de_computacion', component: InstitutoDeComputacionComponent},
         {path: 'investigacion/institutos_de_investigacion/instituto_de_diseno', component: InstitutoDeDisenoComponent},
         {path: 'investigacion/institutos_de_investigacion/instituto_de_fisica_y_matematicas', component: InstitutoDeFisicaMatematicasComponent},
         {path: 'investigacion/institutos_de_investigacion/instituto_de_agroindustrias', component: InstitutoDeAgroindustriasComponent},
         {path: 'investigacion/institutos_de_investigacion/instituto_de_mineria', component: InstitutoDeMineriaComponent},    
         {path: 'investigacion/institutos_de_investigacion/instituto_de_hidrologia', component: InstitutoDeHidrologiaComponent},  
         {path: 'investigacion/institutos_de_investigacion/instituto_de_electronica_y_mecatronica', component: InstitutoDeElectronicaYMecatronicaComponent},  
         {path: 'investigacion/institutos_de_investigacion/instituto_de_mineria', component: InstitutoDeMineriaComponent},  
         {path: 'investigacion/institutos_de_investigacion/instituto_de_ciencias_sociales_y_humanidades', component: InstitutoDeCienciasSocialesYHumanidadesComponent},  
         {path: 'investigacion/institutos_de_investigacion/instituto_de_ingenieria_industrial_y_automotriz', component: InstitutoDeIngenieriaIndustrialYAutomotrizComponent},  
         {path: 'investigacion/institutos_de_investigacion/centro_de_estudios_de_muevos_materiales', component: CentroDeEstudiosDeNuevosMaterialesComponent},
      { path: 'cultura', component: CulturaComponent },
         { path: 'cultura/publicaciones', component: PublicacionesComponent },
         { path: 'cultura/publicaciones/libros', component: LibrosComponent},
         { path: 'cultura/publicaciones/libros/una_aproximacion_a_la_espectroscopia_de_resonancia_magnetica_nuclear', component: AproximacionEspectrocospiaComponent},
         { path: 'cultura/publicaciones/libros/a_new_model_of_university_universitires_for_development', component: ModelOfUniversityComponent},
         { path: 'cultura/publicaciones/libros/un_nuevo_modelo_de_universidad_universidades_para_el_desarrollo', component: NuevoModeloUniversidadComponent},
         { path: 'cultura/publicaciones/libros/el_significado_de_los_sueños_y_otros_temas_m', component: SignificadoDeLosSuenosComponent},
         { path: 'cultura/publicaciones/libros/caminos_de_la_historia_mixteca', component: CaminosDeLaHistoriaMixtecaComponent},
         { path: 'cultura/publicaciones/libros/raices_mixtecas', component: RaicesMixtecasComponent},
         { path: 'cultura/publicaciones/libros/nuu_savi_la_patria_mixteca', component: NuuSaviComponent},
         { path: 'cultura/publicaciones/libros/pasado_y_presente_de_la_cultura_mixteca', component: PasadoPresenteCulturaMixtecaComponent},
         { path: 'cultura/publicaciones/libros/personajes_e_instituciones_del_pueblo_mixteco', component: PersonajesInstitucionesPuebloDeMexicoComponent},
         { path: 'cultura/publicaciones/libros/la_tierra_del_sol_y_de_la_lluvia', component: TierraSolLunaComponent},
         { path: 'cultura/publicaciones/libros/presencias_de_la_cultura_mixteca', component: PresenciasCulturaMixtecaComponent},
         { path: 'cultura/publicaciones/libros/la_vivienda_tradicional_en_la_mixteca_oaxaqueña', component:ViviendaTradicionalMixtecaComponent },
         { path: 'cultura/publicaciones/libros/aplicacion_de_un_modelo_de_balances_hdricos_en_la_cuenca_alta_del_rio_mixteco_(oaxaca)', component: ModeloBalancesHidricosComponent},
         { path: 'cultura/publicaciones/libros/una_nueva_carta_de_las_naciones_unidas', component: NuevaCartaNacionesUnidasComponent},
         { path: 'cultura/publicaciones/libros/new_charter_for_the_united_nations', component: NewCharterComponent},
         { path: 'cultura/publicaciones/libros/el_agua', component: ElAguaComponent},
         { path: 'cultura/publicaciones/libros/huajuapan_de_leon_estado_de_oaxaca_cuaderno_estadistico_municipal', component: HuajuapanLeonOaxacaComponent},
         { path: 'cultura/publicaciones/libros/electrónica_y_computación_en_mexico', component: ElectronicaYComputacionComponent},
         { path: 'cultura/publicaciones/libros/inteligencia_artificial_en_mexico', component: InteligenciaArtificialMexicoComponent},
         { path: 'cultura/libreria', component: LibreriasComponent},
         { path: 'cultura/actividades_culturales_y_deportivas', component: ActividadesCulturalesYDeportivasComponent},
         { path: 'cultura/actividades_culturales_y_deportivas/centro_de_actividades_culturales', component: CentroActividadesCulturalesComponent},
         { path: 'cultura/actividades_culturales_y_deportivas/cursos_y_conferencias', component: CursosConferenciasComponent},
         { path: 'cultura/actividades_culturales_y_deportivas/congresos_y_seminarios', component: CongresosYSeminariosComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
