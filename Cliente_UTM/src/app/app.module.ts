import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WebComponent } from './components/web/web.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { DirectorioComponent } from './components/directorio/directorio.component';
import { EnsenanzaComponent } from './components/ensenanza/ensenanza.component';
import { InvestigacionComponent } from './components/investigacion/investigacion.component';
import { UTMComponent } from './components/utm/utm.component';
import { DesarrolloComponent } from './components/desarrollo/desarrollo.component';
import { ModeloEducativoComponent } from './components/modelo-educativo/modelo-educativo.component';
import { PremiosReconocimientosComponent } from './components/premios-reconocimientos/premios-reconocimientos.component';
import { CorreoElectronicoComponent } from './components/correo-electronico/correo-electronico.component';
import { EstructuraGeneralComponent } from './components/estructura-general/estructura-general.component';
import { LegislacionUniversitariaComponent } from './components/legislacion-universitaria/legislacion-universitaria.component';
import { NuestraUniversidadComponent } from './components/nuestra-universidad/nuestra-universidad.component';
import { CulturaComponent } from './components/cultura/cultura.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { InstitutoDeComputacionComponent } from './components/instituto-de-computacion/instituto-de-computacion.component';
import { InstitutoDeDisenoComponent } from './components/instituto-de-diseno/instituto-de-diseno.component';
import { InstitutoDeFisicaMatematicasComponent } from './components/instituto-de-fisica-matematicas/instituto-de-fisica-matematicas.component';
import { InstitutoDeAgroindustriasComponent } from './components/instituto-de-agroindustrias/instituto-de-agroindustrias.component';
import { InstitutoDeHidrologiaComponent } from './components/instituto-de-hidrologia/instituto-de-hidrologia.component';
import { InstitutoDeMineriaComponent } from './components/instituto-de-mineria/instituto-de-mineria.component';
import { InstitutoDeCienciasSocialesYHumanidadesComponent } from './components/instituto-de-ciencias-sociales-y-humanidades/instituto-de-ciencias-sociales-y-humanidades.component';
import { InstitutoDeIngenieriaIndustrialYAutomotrizComponent } from './components/instituto-de-ingenieria-industrial-y-automotriz/instituto-de-ingenieria-industrial-y-automotriz.component';
import { InstitutoDeElectronicaYMecatronicaComponent } from './components/instituto-de-electronica-y-mecatronica/instituto-de-electronica-y-mecatronica.component';
import { IngenieriaEnComputacionComponent } from './components/ingenieria-en-computacion/ingenieria-en-computacion.component';
import { IngenieriaEnElectronicaComponent } from './components/ingenieria-en-electronica/ingenieria-en-electronica.component';
import { IngenieriaEnDisenoComponent } from './components/ingenieria-en-diseno/ingenieria-en-diseno.component';
import { LicenciaturaEnCienciasEmpresarialesComponent } from './components/licenciatura-en-ciencias-empresariales/licenciatura-en-ciencias-empresariales.component';
import { LicenciaturaEnMatematicasAplicadasComponent } from './components/licenciatura-en-matematicas-aplicadas/licenciatura-en-matematicas-aplicadas.component';
import { IngenieriaEnAlimentosComponent } from './components/ingenieria-en-alimentos/ingenieria-en-alimentos.component';
import { IngenieriaIndustrialComponent } from './components/ingenieria-industrial/ingenieria-industrial.component';
import { IngenieriaEnMecatronicaComponent } from './components/ingenieria-en-mecatronica/ingenieria-en-mecatronica.component';

import { IngenieriaEnFisicaAplicadaComponent } from './components/ingenieria-en-fisica-aplicada/ingenieria-en-fisica-aplicada.component';
import { IngenieriaMecanicaAutomotrizComponent } from './components/ingenieria-mecanica-automotriz/ingenieria-mecanica-automotriz.component';
import { MaestriaEnDisenoDeModasComponent } from './components/maestria-en-diseno-de-modas/maestria-en-diseno-de-modas.component';
import { MaestriaEnDisenoDeMueblesComponent } from './components/maestria-en-diseno-de-muebles/maestria-en-diseno-de-muebles.component';
import { MaestriaEnMediosInteractivosComponent } from './components/maestria-en-medios-interactivos/maestria-en-medios-interactivos.component';
import { MaestriaEnCienciasDeMaterialesComponent } from './components/maestria-en-ciencias-de-materiales/maestria-en-ciencias-de-materiales.component';
import { MaestriaEnModelacionMatematicaComponent } from './components/maestria-en-modelacion-matematica/maestria-en-modelacion-matematica.component';
import { MaestriaEnRoboticaComponent } from './components/maestria-en-robotica/maestria-en-robotica.component';
import { MaestriaEnAdministracionDeNegociosComponent } from './components/maestria-en-administracion-de-negocios/maestria-en-administracion-de-negocios.component';
import { MaestriaEnTecnologiaAvanzadaDeManufacturaComponent } from './components/maestria-en-tecnologia-avanzada-de-manufactura/maestria-en-tecnologia-avanzada-de-manufactura.component';
import { MaestriaEnTecnologiasDeComputoAplicadoComponent } from './components/maestria-en-tecnologias-de-computo-aplicado/maestria-en-tecnologias-de-computo-aplicado.component';
import { MaestriaEnCienciasProductosNaturalesYAlimentacionComponent } from './components/maestria-en-ciencias-productos-naturales-y-alimentacion/maestria-en-ciencias-productos-naturales-y-alimentacion.component';
import { MaestriaEnElectronicaOpcionSistemasInteligentesComponent } from './components/maestria-en-electronica-opcion-sistemas-inteligentes/maestria-en-electronica-opcion-sistemas-inteligentes.component';
import { DoctoradoEnRoboticaComponent } from './components/doctorado-en-robotica/doctorado-en-robotica.component';
import { DoctoradoEnTecnologiasDeComputoAplicadoComponent } from './components/doctorado-en-tecnologias-de-computo-aplicado/doctorado-en-tecnologias-de-computo-aplicado.component';
import { DoctoradoEnModelacionMatematicaComponent } from './components/doctorado-en-modelacion-matematica/doctorado-en-modelacion-matematica.component';
import { DoctoradoEnElectronicaOpcionSistemasInteligentesComponent } from './components/doctorado-en-electronica-opcion-sistemas-inteligentes/doctorado-en-electronica-opcion-sistemas-inteligentes.component';
import { InstitutosDeInvestigacionComponent } from './components/institutos-de-investigacion/institutos-de-investigacion.component';
import { CentroDeEstudiosDeNuevosMaterialesComponent } from './components/centro-de-estudios-de-nuevos-materiales/centro-de-estudios-de-nuevos-materiales.component';

import { LicienciaturasComponent } from './components/licienciaturas/licienciaturas.component';
import { PosgradosComponent } from './components/posgrados/posgrados.component';
import { IngenieriaCivilComponent } from './components/ingenieria-civil/ingenieria-civil.component';
import { CampusHuajuapanLicenciaturasComponent } from './components/campus-huajuapan-licenciaturas/campus-huajuapan-licenciaturas.component';
import { CampusHuajuapanInstitutosComponent } from './components/campus-huajuapan-institutos/campus-huajuapan-institutos.component';
import { IngresoALicenciaturaComponent } from './components/ingreso-a-licenciatura/ingreso-a-licenciatura.component';
import { IngresoAPosgradoComponent } from './components/ingreso-a-posgrado/ingreso-a-posgrado.component';
import { BecasComponent } from './components/becas/becas.component';
import { ServiciosEscolaresComponent } from './components/servicios-escolares/servicios-escolares.component';
import { CampusHuajuapanPosgradosComponent } from './components/campus-huajuapan-posgrados/campus-huajuapan-posgrados.component';
import { DoctoradoEnInteligenciaArtificialComponent } from './components/doctorado-en-inteligencia-artificial/doctorado-en-inteligencia-artificial.component';
import { DoctoradoEnCienciasProductosNaturalesYAlimentosComponent } from './components/doctorado-en-ciencias-productos-naturales-y-alimentos/doctorado-en-ciencias-productos-naturales-y-alimentos.component';
import { MaestriaEnInteligenciaArtificialComponent } from './components/maestria-en-inteligencia-artificial/maestria-en-inteligencia-artificial.component';
import { MaestriaEnIngenieriaDeSoftwareComponent } from './components/maestria-en-ingenieria-de-software/maestria-en-ingenieria-de-software.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { RectoriaComponent } from './components/rectoria/rectoria.component';
import { ViceRectoriaComponent } from './components/vice-rectoria/vice-rectoria.component';
import { DivisionDeEstudiosDePosgradoComponent } from './components/division-de-estudios-de-posgrado/division-de-estudios-de-posgrado.component';
import { DirectoresDeInstitutoComponent } from './components/directores-de-instituto/directores-de-instituto.component';
import { JefesDeCarreraComponent } from './components/jefes-de-carrera/jefes-de-carrera.component';
import { PersonalAdministrativoComponent } from './components/personal-administrativo/personal-administrativo.component';
import { LibrosComponent } from './components/libros/libros.component';
import { RevistasComponent } from './components/revistas/revistas.component';
import { LibreriasComponent } from './components/librerias/librerias.component';
import { ActividadesCulturalesYDeportivasComponent } from './components/actividades-culturales-y-deportivas/actividades-culturales-y-deportivas.component';
import { CentroDeActividadesCulturalesComponent } from './components/centro-de-actividades-culturales/centro-de-actividades-culturales.component';
import { SemanaDeLaCulturaMixtecaComponent } from './components/semana-de-la-cultura-mixteca/semana-de-la-cultura-mixteca.component';
import { CursosYConferenciasComponent } from './components/cursos-y-conferencias/cursos-y-conferencias.component';
import { CongresosYSeminariosComponent } from './components/congresos-y-seminarios/congresos-y-seminarios.component';
import { EventosRecreativosComponent } from './components/eventos-recreativos/eventos-recreativos.component';
import { YearInternacionalDeLaPapaComponent } from './components/year-internacional-de-la-papa/year-internacional-de-la-papa.component';
import { CineClubComponent } from './components/cine-club/cine-club.component';
import { ConcursoDeMicroroboticaComponent } from './components/concurso-de-microrobotica/concurso-de-microrobotica.component';
import { SimposiumLinuxMixtecaComponent } from './components/simposium-linux-mixteca/simposium-linux-mixteca.component';
import { AproximacionEspectrocospiaComponent } from './components/aproximacion-espectrocospia/aproximacion-espectrocospia.component';
import { ModelOfUniversityComponent } from './components/model-of-university/model-of-university.component';
import { NuevoModeloUniversidadComponent } from './components/nuevo-modelo-universidad/nuevo-modelo-universidad.component';
import { SignificadoDeLosSuenosComponent } from './components/significado-de-los-suenos/significado-de-los-suenos.component';
import { CaminosDeLaHistoriaMixtecaComponent } from './components/caminos-de-la-historia-mixteca/caminos-de-la-historia-mixteca.component';
import { RaicesMixtecasComponent } from './components/raices-mixtecas/raices-mixtecas.component';
import { TierraSolLunaComponent } from './components/tierra-sol-luna/tierra-sol-luna.component';
import { NuuSaviComponent } from './components/nuu-savi/nuu-savi.component';
import { PasadoPresenteCulturaMixtecaComponent } from './components/pasado-presente-cultura-mixteca/pasado-presente-cultura-mixteca.component';
import { PersonajesInstitucionesPuebloDeMexicoComponent } from './components/personajes-instituciones-pueblo-de-mexico/personajes-instituciones-pueblo-de-mexico.component';
import { PresenciasCulturaMixtecaComponent } from './components/presencias-cultura-mixteca/presencias-cultura-mixteca.component';
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
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProfesoresInvestigadoresComponent } from './components/profesores-investigadores/profesores-investigadores.component';
import { InvestigadoresICComponent } from './components/investigadores-ic/investigadores-ic.component';
import { InvestigadoresIMEComponent } from './components/investigadores-ime/investigadores-ime.component';
import { CampusHuajuapanInvestigadoresComponent } from './components/campus-huajuapan-investigadores/campus-huajuapan-investigadores.component';
import { InvestigadoresIAComponent } from './components/investigadores-ia/investigadores-ia.component';
import { InvestigadoresIDComponent } from './components/investigadores-id/investigadores-id.component';
import { InvestigadoresICSHComponent } from './components/investigadores-icsh/investigadores-icsh.component';
import { InvestigadoresIIIAComponent } from './components/investigadores-iiia/investigadores-iiia.component';
import { InvestigadoresCENMComponent } from './components/investigadores-cenm/investigadores-cenm.component';
import { InvestigadoresIFMComponent } from './components/investigadores-ifm/investigadores-ifm.component';
import { InvestigadoresIHComponent } from './components/investigadores-ih/investigadores-ih.component';
import { InvestigadoresIMComponent } from './components/investigadores-im/investigadores-im.component';
import { InvestigadoresDEPGComponent } from './components/investigadores-depg/investigadores-depg.component';
import { InvestigadoresCPDComponent } from './components/investigadores-cpd/investigadores-cpd.component';
import { InvestigadoresCIComponent } from './components/investigadores-ci/investigadores-ci.component';
import { InvestigadoresPCCComponent } from './components/investigadores-pcc/investigadores-pcc.component';
import { BibliotecasComponent } from './components/bibliotecas/bibliotecas.component';
import { IngenieriaQuimicaComponent } from './components/ingenieria-quimica/ingenieria-quimica.component';

@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    HistoriaComponent,
    DirectorioComponent,
    EnsenanzaComponent,
    InvestigacionComponent,
    UTMComponent,
    DesarrolloComponent,
    ModeloEducativoComponent,
    PremiosReconocimientosComponent,
    CorreoElectronicoComponent,
    EstructuraGeneralComponent,
    LegislacionUniversitariaComponent,
    NuestraUniversidadComponent,
    CulturaComponent,
    PublicacionesComponent,
    InstitutoDeComputacionComponent,
    InstitutoDeDisenoComponent,
    InstitutoDeFisicaMatematicasComponent,
    InstitutoDeAgroindustriasComponent,
    InstitutoDeHidrologiaComponent,
    InstitutoDeMineriaComponent,
    InstitutoDeCienciasSocialesYHumanidadesComponent,
    InstitutoDeIngenieriaIndustrialYAutomotrizComponent,
    InstitutoDeElectronicaYMecatronicaComponent,
    IngenieriaEnComputacionComponent,
    IngenieriaEnElectronicaComponent,
    IngenieriaEnDisenoComponent,
    LicenciaturaEnCienciasEmpresarialesComponent,
    LicenciaturaEnMatematicasAplicadasComponent,
    IngenieriaEnAlimentosComponent,
    IngenieriaIndustrialComponent,
    IngenieriaEnMecatronicaComponent,
    IngenieriaEnFisicaAplicadaComponent,
    IngenieriaMecanicaAutomotrizComponent,
    MaestriaEnDisenoDeModasComponent,
    MaestriaEnDisenoDeMueblesComponent,
    MaestriaEnMediosInteractivosComponent,
    MaestriaEnCienciasDeMaterialesComponent,
    MaestriaEnModelacionMatematicaComponent,
    MaestriaEnRoboticaComponent,
    MaestriaEnAdministracionDeNegociosComponent,
    MaestriaEnTecnologiaAvanzadaDeManufacturaComponent,
    MaestriaEnTecnologiasDeComputoAplicadoComponent,
    MaestriaEnCienciasProductosNaturalesYAlimentacionComponent,
    MaestriaEnElectronicaOpcionSistemasInteligentesComponent,
    DoctoradoEnRoboticaComponent,
    DoctoradoEnTecnologiasDeComputoAplicadoComponent,
    DoctoradoEnModelacionMatematicaComponent,
    DoctoradoEnElectronicaOpcionSistemasInteligentesComponent,
    InstitutosDeInvestigacionComponent,
    CentroDeEstudiosDeNuevosMaterialesComponent,
    
    LicienciaturasComponent,
    PosgradosComponent,
    IngenieriaCivilComponent,
    CampusHuajuapanLicenciaturasComponent,
    CampusHuajuapanInstitutosComponent,
    IngresoALicenciaturaComponent,
    IngresoAPosgradoComponent,
    BecasComponent,
    ServiciosEscolaresComponent,
    CampusHuajuapanPosgradosComponent,
    DoctoradoEnInteligenciaArtificialComponent,
    DoctoradoEnCienciasProductosNaturalesYAlimentosComponent,
 
    MaestriaEnInteligenciaArtificialComponent,
    MaestriaEnIngenieriaDeSoftwareComponent,
    PruebasComponent,
    RectoriaComponent,
    ViceRectoriaComponent,
    DivisionDeEstudiosDePosgradoComponent,
    DirectoresDeInstitutoComponent,
    JefesDeCarreraComponent,
    PersonalAdministrativoComponent,
    LibrosComponent,
    RevistasComponent,
    LibreriasComponent,
    ActividadesCulturalesYDeportivasComponent,
    CentroDeActividadesCulturalesComponent,
    SemanaDeLaCulturaMixtecaComponent,
    CursosYConferenciasComponent,
    CongresosYSeminariosComponent,
    EventosRecreativosComponent,
    YearInternacionalDeLaPapaComponent,
    CineClubComponent,
    ConcursoDeMicroroboticaComponent,
    SimposiumLinuxMixtecaComponent,
    AproximacionEspectrocospiaComponent,
    ModelOfUniversityComponent,
    NuevoModeloUniversidadComponent,
    SignificadoDeLosSuenosComponent,
    CaminosDeLaHistoriaMixtecaComponent,
    RaicesMixtecasComponent,
    TierraSolLunaComponent,
    NuuSaviComponent,
    PasadoPresenteCulturaMixtecaComponent,
    PersonajesInstitucionesPuebloDeMexicoComponent,
    PresenciasCulturaMixtecaComponent,
   
    ViviendaTradicionalMixtecaComponent,
        ModeloBalancesHidricosComponent,
        NuevaCartaNacionesUnidasComponent,
        NewCharterComponent,
        ElAguaComponent,
        HuajuapanLeonOaxacaComponent,
        ElectronicaYComputacionComponent,
        InteligenciaArtificialMexicoComponent,
        CentroActividadesCulturalesComponent,
        CursosConferenciasComponent,
        ContactoComponent,
        ProfesoresInvestigadoresComponent,
        InvestigadoresICComponent,
        InvestigadoresIMEComponent,
        CampusHuajuapanInvestigadoresComponent,
        InvestigadoresIAComponent,
        InvestigadoresIDComponent,
        InvestigadoresICSHComponent,
        InvestigadoresIIIAComponent,
        InvestigadoresCENMComponent,
        InvestigadoresIFMComponent,
        InvestigadoresIHComponent,
        InvestigadoresIMComponent,
        InvestigadoresDEPGComponent,
        InvestigadoresCPDComponent,
        InvestigadoresCIComponent,
        InvestigadoresPCCComponent,
        BibliotecasComponent,
        IngenieriaQuimicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
