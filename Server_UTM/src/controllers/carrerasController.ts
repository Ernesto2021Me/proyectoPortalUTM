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

public async list_informacion_completa(req: Request, res: Response): Promise<void> {
    const { Codigocarrera } = req.body;
    
    try {
        // Ejecutar la consulta combinada con parámetros
        const resultado = await pool.query(`
          SELECT 
    c.nombre AS nombre_carrera,
    j.nombre AS nombre_jefe,
    j.correo AS correo_jefe,
    c.mision AS mision,
    mc.descripcion AS descripcion_mision,
    c.vision AS vision,
    vc.descripcion AS descripcion_vision,
    c.objetivo AS objetivos,
    oc.descripcion AS descripcion_objetivo,
    c.perfil_ingreso,
    kc.descripcion_conocimiento AS descripcion_conocimiento_ingreso,
    hc.descripcion_habilidad AS descripcion_habilidad_ingreso,
    avc.descripcion_valores AS descripcion_valores_ingreso,
    c.perfil_egreso,
    kc2.descripcion_conocimiento AS descripcion_conocimiento_egreso,
    hc2.descripcion_habilidad AS descripcion_habilidad_egreso,
    avc2.descripcion_valores AS descripcion_valores_egreso,
    c.campo_accion,
    cc.descripcion_campos AS descripcion_campo,
      ic.url AS url_imagen
FROM carreras c
JOIN jefe_carreras j ON c.codigoCarrera = j.codigoCarrera
LEFT JOIN mision_carreras mc ON c.id_informacion = mc.id_carrera_informacion
LEFT JOIN vision_carreras vc ON c.id_informacion = vc.id_carrera_informacion
LEFT JOIN objetivo_carreras oc ON c.id_informacion = oc.id_carrera_informacion
LEFT JOIN conocimientos_carreras kc ON c.id_informacion = kc.id_carrera_informacion AND kc.perfil = 1
LEFT JOIN habilidades_carreras hc ON c.id_informacion = hc.id_carrera_informacion AND hc.perfil = 1
LEFT JOIN actitudes_valores_carreras avc ON c.id_informacion = avc.id_carrera_informacion AND avc.perfil = 1
LEFT JOIN conocimientos_carreras kc2 ON c.id_informacion = kc2.id_carrera_informacion AND kc2.perfil = 2
LEFT JOIN habilidades_carreras hc2 ON c.id_informacion = hc2.id_carrera_informacion AND hc2.perfil = 2
LEFT JOIN actitudes_valores_carreras avc2 ON c.id_informacion = avc2.id_carrera_informacion AND avc2.perfil = 2
LEFT JOIN campo_accion_carreras cc ON c.id_informacion = cc.id_carrera_informacion
LEFT JOIN imagenes_Carreras ic ON c.id_informacion = ic.id_informacion_carrera
WHERE c.codigoCarrera=?;
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