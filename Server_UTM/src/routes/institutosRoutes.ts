import { Router } from 'express';
import { institutosController } from '../controllers/institutosController';
class InstitutosRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{

this.router.get('/investigacion',institutosController.list_institutos_investigacion);

}
}
const institutosRoutes= new InstitutosRoutes();
export default institutosRoutes.router;