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
    mc.descripcion_general AS mision,
    mc.descripcion_adicional AS descripcion_mision,
    vc.descripcion_general AS vision,
    vc.descripcion_adicional AS descripcion_vision,
    oc.descripcion_general AS objetivos,
    oc.descripcion_adicional AS descripcion_objetivo,
    c.perfil_ingreso,
    nc_ingreso.descripcion_conocimiento AS descripcion_conocimiento_ingreso,
    nh_ingreso.descripcion_habilidad AS descripcion_habilidad_ingreso,
    av_ingreso.descripcion_valores AS descripcion_valores_ingreso,
    c.perfil_egreso,
    nc_egreso.descripcion_conocimiento AS descripcion_conocimiento_egreso,
    nh_egreso.descripcion_habilidad AS descripcion_habilidad_egreso,
    av_egreso.descripcion_valores AS descripcion_valores_egreso,
    cc.descripcion_general AS campo_accion,
    cc.descripcion_campos AS descripcion_campo,
    ic.url AS url_imagen
FROM carreras c
JOIN jefe_carreras j ON c.codigoCarrera = j.codigoCarrera
LEFT JOIN mision_carreras mc ON c.id_informacion = mc.id_carrera_informacion
LEFT JOIN vision_carreras vc ON c.id_informacion = vc.id_carrera_informacion
LEFT JOIN objetivo_carreras oc ON c.id_informacion = oc.id_carrera_informacion
LEFT JOIN perfiles_carreras nc_ingreso ON c.id_informacion = nc_ingreso.id_carrera_informacion AND nc_ingreso.tipo_perfil = 1
LEFT JOIN perfiles_carreras nh_ingreso ON c.id_informacion = nh_ingreso.id_carrera_informacion AND nh_ingreso.tipo_perfil = 1
LEFT JOIN perfiles_carreras av_ingreso ON c.id_informacion = av_ingreso.id_carrera_informacion AND av_ingreso.tipo_perfil = 1
LEFT JOIN perfiles_carreras nc_egreso ON c.id_informacion = nc_egreso.id_carrera_informacion AND nc_egreso.tipo_perfil = 2
LEFT JOIN perfiles_carreras nh_egreso ON c.id_informacion = nh_egreso.id_carrera_informacion AND nh_egreso.tipo_perfil = 2
LEFT JOIN perfiles_carreras av_egreso ON c.id_informacion = av_egreso.id_carrera_informacion AND av_egreso.tipo_perfil = 2
LEFT JOIN campo_accion_carreras cc ON c.id_informacion = cc.id_carrera_informacion
LEFT JOIN imagenes_Carreras ic ON c.id_informacion = ic.id_informacion_carrera
WHERE c.codigoCarrera = ?;
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