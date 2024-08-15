import {Request,Response} from 'express';
import pool from '../database';
class CarrerasController
{

    public async list_licenciaturas(req: Request, res: Response): Promise<void> {
    try {
        const respuesta = await pool.query(
            ` SELECT  c.codigoCarrera, c.nombre, c.codigoInstituto, c.siglas,ci.url
             FROM carreras c
             JOIN imagenes_Carreras ci ON c.id_informacion = ci.id_informacion_carrera
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

public async list_informacion_completa(req: Request, res: Response): Promise<void> {
    const { Codigocarrera } = req.body;
    
    try {
        // Ejecutar la consulta combinada con parámetros
        const resultado = await pool.query(`
          SELECT
    c.nombre AS nombre_carrera,
    j.grado as grado_jefe,
    j.nombre AS nombre_jefe,
    j.correo AS correo_jefe,
    MAX(CASE WHEN i.Tipo = 'mision' THEN i.descripcion ELSE NULL END) AS mision,
    MAX(CASE WHEN i.Tipo = 'vision' THEN i.descripcion ELSE NULL END) AS vision,
    MAX(CASE WHEN i.Tipo = 'objetivo' THEN i.descripcion ELSE NULL END) AS objetivo,
    MAX(CASE WHEN i.Tipo = 'perfil ingreso' THEN i.descripcion ELSE NULL END) AS perfil_ingreso,
    MAX(CASE WHEN i.Tipo = 'perfil egreso' THEN i.descripcion ELSE NULL END) AS perfil_egreso,
    MAX(CASE WHEN i.Tipo = 'campo accion' THEN i.descripcion ELSE NULL END) AS campo_accion,
    ic.url AS url_imagen
FROM
    carreras c
LEFT JOIN jefe_carreras j ON c.codigoCarrera = j.codigoCarrera
LEFT JOIN
    Informacion_carreras i ON c.id_informacion = i.id_carrera_informacion
LEFT JOIN imagenes_Carreras ic ON c.id_informacion = ic.id_informacion_carrera
WHERE
    c.codigoCarrera = ? -- Cambia 'tu_codigo_carrera' por el valor deseado
GROUP BY
    c.codigoCarrera, c.nombre;
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