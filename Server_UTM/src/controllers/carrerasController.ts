import {Request,Response} from 'express';
import pool from '../database';
class CarrerasController
{

    public async list_licenciaturas(req: Request, res: Response): Promise<void> {
    try {
        const respuesta = await pool.query(
            `SELECT * FROM carreras
             WHERE nombre LIKE 'Ingeniería%' 
                OR nombre LIKE 'Licenciatura%'`
        );
        res.json(respuesta);
    } catch (error) {
        res.status(500).json({ error: 'Error en la consulta' });
    }
}

public async list_posgrados(req: Request, res: Response): Promise<void> {
    try {
        const respuesta = await pool.query(
            `SELECT * FROM carreras
             WHERE nombre LIKE 'Maestría%' 
                OR nombre LIKE 'Doctorado%'`
        );
        res.json(respuesta);
    } catch (error) {
        res.status(500).json({ error: 'Error en la consulta' });
    }
}


}
export const carrerasController = new CarrerasController();