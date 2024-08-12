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
this.router.post('/mision',carrerasController.list_one_mision);
this.router.post('/vision',carrerasController.list_one_vision);
this.router.post('/objetivo',carrerasController.list_one_objetivo);
this.router.post('/ingreso',carrerasController.list_one_ingreso);
this.router.post('/egreso',carrerasController.list_one_egreso);
this.router.post('/campo',carrerasController.list_informacion_completa);
}
}
const carrerasRoutes= new CarrerasRoutes();
export default carrerasRoutes.router;