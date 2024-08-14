import {Request,Response} from 'express';
import pool from '../database';
class InstitutosController
{

    public async list_institutos_investigacion(req: Request, res: Response): Promise<void> {
        try {
            const respuesta = await pool.query(
                `SELECT i.codigo, i.nombre, iI.url
                 FROM institutos i
                 JOIN imagenes_Institutos iI ON i.codigo = iI.codigoInstituto
                 WHERE nombre LIKE '%Instituto%'
                    OR nombre LIKE '%Centro de Estudios%';`
            );
            res.json(respuesta);  // .rows si estás usando pg-pool o pg-promise
        } catch (error) {
            res.status(500).json({ error: 'Error en la consulta' });
        }
    }
    





}
export const institutosController = new InstitutosController();