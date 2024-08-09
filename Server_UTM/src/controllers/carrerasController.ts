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


public async list_perfil_ingreso(req: Request, res: Response): Promise<void> {
    const { Codigocarrera } = req.body;
    
    try {
        // Ejecutar la consulta con parámetros
        const resultado = await pool.query(`
            SELECT 
                ic.perfil_ingreso, 
                c.descripcion 
            FROM 
                informacion_carreras ic 
            JOIN 
                conocimientos c ON ic.id_informacion = c.id_carrera_informacion 
            WHERE 
                ic.Codigocarrera = ?
                AND c.perfil = 1
        `, [Codigocarrera]);

        // Devolver los resultados como JSON
        res.json(resultado); // Asumiendo que 'resultado' tiene una propiedad 'rows'
    } catch (error) {
        // Manejar el error y devolver una respuesta adecuada
        res.status(500).json({ error: 'Error en la consulta' });
    }
}

public async list_perfil_egreso(req: Request, res: Response): Promise<void> {
    const { Codigocarrera } = req.body;
    console.log(Codigocarrera);
    try {
        // Ejecutar la consulta con parámetros
        const resultado = await pool.query(`
            SELECT 
                ic.perfil_egreso, 
                c.descripcion 
            FROM 
                informacion_carreras ic 
            JOIN 
                conocimientos c ON ic.id_informacion = c.id_carrera_informacion 
            WHERE 
                ic.Codigocarrera = ?
                AND c.perfil = 2
        `, [Codigocarrera]);

        // Devolver los resultados como JSON
        res.json(resultado); // Asumiendo que 'resultado' tiene una propiedad 'rows'
    } catch (error) {
        // Manejar el error y devolver una respuesta adecuada
        res.status(500).json({ error: 'Error en la consulta' });
    }
}

}
export const carrerasController = new CarrerasController();