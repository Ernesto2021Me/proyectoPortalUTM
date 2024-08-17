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
}
}
const carrerasRoutes= new CarrerasRoutes();
export default carrerasRoutes.router;