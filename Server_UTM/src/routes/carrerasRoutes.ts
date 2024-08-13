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
this.router.post('/informacion_carrera',carrerasController.list_informacion_completa);
}
}
const carrerasRoutes= new CarrerasRoutes();
export default carrerasRoutes.router;