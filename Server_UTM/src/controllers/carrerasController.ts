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
            `SELECT * 
FROM carreras
WHERE (nombre LIKE 'Maestría%' 
       OR nombre LIKE 'Doctorado%')
  AND nombre NOT IN ('Maestría en Tecnologías de Cómputo Aplicado', 
                     'Doctorado en Tecnologías de Cómputo Aplicado', 
                     'Maestría en Sistemas Distribuidos');`
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

public async list_informacion_licenciatura(req: Request, res: Response): Promise<void> {
    const { Codigocarrera } = req.body;
    
    try {
        // Ejecutar la consulta combinada con parámetros
        const resultado = await pool.query(`
          SELECT
    c.nombre AS nombre_carrera,
    j.grado as grado_jefe,
    j.nombre AS nombre_jefe,
    j.correo AS correo_jefe,
    i.mision,
    i.vision,
    i.objetivo,
    i.perfil_ingreso,
    i.perfil_egreso,
    i.campo_accion,
    ic.url AS url_imagen
FROM
    carreras c
LEFT JOIN jefe_carreras j ON c.codigoCarrera = j.codigoCarrera
LEFT JOIN
    Informacion_licenciaturas i ON c.id_informacion = i.id_carrera_informacion
LEFT JOIN imagenes_Carreras ic ON c.id_informacion = ic.id_informacion_carrera
WHERE
    c.codigoCarrera =?  -- Cambia 'tu_codigo_carrera' por el valor deseado
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

public async list_informacion_posgrado(req: Request, res: Response): Promise<void> {
    const { Codigocarrera } = req.body;
    
    try {
        // Ejecutar la consulta combinada con parámetros
        const resultado = await pool.query(`
          SELECT
    c.nombre AS nombre_carrera,
    i.mision,
    i.vision,
    i.objetivo,
    i.perfil_ingreso,
    i.perfil_egreso,
    i.Becas As beca,
    ic.url AS url_imagen
FROM
    carreras c
LEFT JOIN
    Informacion_posgrados i ON c.id_informacion = i.id_carrera_informacion
LEFT JOIN imagenes_Carreras ic ON c.id_informacion = ic.id_informacion_carrera
WHERE
    c.codigoCarrera =?  -- Cambia 'tu_codigo_carrera' por el valor deseado
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

public async nucleo_academico(req: Request, res: Response): Promise<void> {
    const { Codigocarrera } = req.body;
    try {
        const resultado = await pool.query(`
            SELECT
                n.codigoCarrera,
                i.nombre as codigoInstituto,
                p.grado,
                p.nombre,
                p.correo,
                n.descripcion_perfil,
                n.SNI,
                n.perfil_deseable,
                n.image_url as imagen_url
            FROM
                nucleo_academico n
            LEFT JOIN
                profesores_posgrados p ON n.id_perfil = p.id
            LEFT JOIN
                institutos i on i.codigo=p.codigoInstituto
            WHERE
                n.codigoCarrera = ?
        `, [Codigocarrera]); // Reemplaza Codigocarrera con la variable que contiene el valor del código de carrera
    
        // Devolver los resultados como JSON
        res.json(resultado); // Asegúrate de acceder a 'rows' si esa es la propiedad que contiene los datos
    } catch (error) {
        // Manejar el error y devolver una respuesta adecuada
        res.status(500).json({ error: 'Error en la consulta' });
    }
    
}

public async linea_de_generacion(req: Request, res: Response): Promise<void> {
    const { Codigocarrera } = req.body;
    try {
        const resultado = await pool.query(`
           SELECT 
codigoCarrera, 
descripcion as descripcion_linea
FROM LineasDeGeneracion 
WHERE codigoCarrera= ?
        `, [Codigocarrera]); // Reemplaza Codigocarrera con la variable que contiene el valor del código de carrera
    
        // Devolver los resultados como JSON
        res.json(resultado); // Asegúrate de acceder a 'rows' si esa es la propiedad que contiene los datos
    } catch (error) {
        // Manejar el error y devolver una respuesta adecuada
        res.status(500).json({ error: 'Error en la consulta' });
    }
    
}
}
export const carrerasController = new CarrerasController();