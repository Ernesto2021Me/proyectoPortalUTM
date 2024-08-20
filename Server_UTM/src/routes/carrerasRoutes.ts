import { Router } from 'express';
import { carrerasController } from '../controllers/carrerasController';
class CarrerasRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{

this.router.get('/licenciaturas',carrerasController.list_licenciaturas);
this.router.get('/posgrados',carrerasController.list_posgrados);
this.router.post('/jefe_carrera',carrerasController.list_one_jefe);
this.router.post('/informacion_licenciatura',carrerasController.list_informacion_licenciatura);
this.router.post('/informacion_posgrado',carrerasController.list_informacion_posgrado);
this.router.post('/nucleo_academico',carrerasController.nucleo_academico);
this.router.post('/linea_de_generacion',carrerasController.linea_de_generacion);
this.router.post('/productividad_academica_pub',carrerasController.productividad_academica_pub);
this.router.post('/productividad_academica_even',carrerasController.productividad_academica_event);
this.router.post('/productividad_academica_pro',carrerasController.productividad_academica_pro);
this.router.post('/alumnos_matriculados',carrerasController.alumnos_matriculados);
this.router.post('/tutoria',carrerasController.tutoria_seguimiento);
this.router.post('/vinculacion_sectores',carrerasController.vinculacion_sec);


}
}
const carrerasRoutes= new CarrerasRoutes();
export default carrerasRoutes.router;