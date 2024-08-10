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

public async list_one_jefe(req: Request, res: Response): Promise<void> {
    const { Codigocarrera } = req.body;
    
    try {
        // Ejecutar la consulta con parámetros
        const resultado = await pool.query(`
            SELECT
    j.nombre AS nombre_jefe,
    j.correo AS correo_jefe
FROM
    carreras c
JOIN
    jefe_carreras j
ON
    c.codigoInstituto = j.codigoInstituto 
WHERE codigoCarrera= ?
        `, [Codigocarrera]);

        // Devolver los resultados como JSON
        res.json(resultado); // Asumiendo que 'resultado' tiene una propiedad 'rows'
    } catch (error) {
        // Manejar el error y devolver una respuesta adecuada
        res.status(500).json({ error: 'Error en la consulta' });
    }
}

public async list_one_mision(req: Request, res: Response): Promise<void> {
    const { Codigocarrera } = req.body;
    
    try {
        // Ejecutar la consulta con parámetros
        const resultado = await pool.query(`
           SELECT 
    c.nombre AS nombre_carrera,
    c.mision AS mision,
    mc.descripcion AS descripcion_mision
FROM carreras c
LEFT JOIN mision_carreras mc ON c.mision = mc.id_mision
WHERE codigoCarrera = ?;

        `, [Codigocarrera]);

        // Devolver los resultados como JSON
        res.json(resultado); // Asumiendo que 'resultado' tiene una propiedad 'rows'
    } catch (error) {
        // Manejar el error y devolver una respuesta adecuada
        res.status(500).json({ error: 'Error en la consulta' });
    }
}



public async list_one_vision(req: Request, res: Response): Promise<void> {
    const { Codigocarrera } = req.body;
    
    try {
        // Ejecutar la consulta con parámetros
        const resultado = await pool.query(`
          SELECT 
    c.nombre AS nombre_carrera,
    c.vision AS vision,
    vc.descripcion AS descripcion_vision
FROM carreras c
LEFT JOIN vision_carreras vc ON c.vision = vc.id_vision
WHERE codigoCarrera = ?;

        `, [Codigocarrera]);

        // Devolver los resultados como JSON
        res.json(resultado); // Asumiendo que 'resultado' tiene una propiedad 'rows'
    } catch (error) {
        // Manejar el error y devolver una respuesta adecuada
        res.status(500).json({ error: 'Error en la consulta' });
    }
}

public async list_one_objetivo(req: Request, res: Response): Promise<void> {
    const { Codigocarrera } = req.body;
    
    try {
        // Ejecutar la consulta con parámetros
        const resultado = await pool.query(`
          SELECT 
    c.nombre AS nombre_carrera,
    c.vision AS vision,
    vc.descripcion AS descripcion_vision
FROM carreras c
LEFT JOIN vision_carreras vc ON c.vision = vc.id_vision
WHERE codigoCarrera = ?;

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