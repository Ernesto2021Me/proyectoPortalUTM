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
this.router.post('/perfil_ingreso',carrerasController.list_perfil_ingreso);
this.router.post('/perfil_egreso',carrerasController.list_perfil_egreso);
}
}
const carrerasRoutes= new CarrerasRoutes();
export default carrerasRoutes.router;