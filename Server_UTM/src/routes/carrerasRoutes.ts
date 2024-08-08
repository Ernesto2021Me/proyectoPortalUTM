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
}
}
const carrerasRoutes= new CarrerasRoutes();
export default carrerasRoutes.router;