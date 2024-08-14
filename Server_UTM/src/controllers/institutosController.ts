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
    

    public async one_informacion_general(req: Request, res: Response): Promise<void> {
        const { codigo } = req.body;
        
        try {
            // Ejecutar la consulta con parámetros
            const resultado = await pool.query(`
                SELECT 
                    i.codigo AS codigo,
                    i.nombre AS nombre,
                    i.descripcion_general AS descripcion_general,
                    MAX(CASE WHEN ii.Tipo = 'objetivo general' THEN ii.descripcion ELSE NULL END) AS objetivos_generales,
                    MAX(CASE WHEN ii.Tipo = 'objetivo adicional' THEN ii.descripcion ELSE NULL END) AS objetivos_adicionales,
                    MAX(CASE WHEN ii.Tipo = 'actividad general' THEN ii.descripcion ELSE NULL END) AS actividades_generales,
                    MAX(CASE WHEN ii.Tipo = 'actividad adicional' THEN ii.descripcion ELSE NULL END) AS actividades_adicionales,
                    iI.url AS imagen_url
                FROM 
                    institutos i
                LEFT JOIN 
                    Informacion_Institutos ii ON i.codigo = ii.codigoInstituto
                LEFT JOIN 
                    imagenes_Institutos iI ON i.codigo = iI.codigoInstituto
                WHERE 
                    i.codigo = ?  -- Usando parámetro de consulta
                GROUP BY 
                    i.codigo, i.nombre, i.descripcion_general;
            `, [codigo]);
            
            // Devolver los resultados como JSON
            res.json(resultado); // Ajustado según el formato de resultado que devuelves
        } catch (error) {
            // Manejar el error y devolver una respuesta adecuada
            console.error(error); // Para depurar el error en el servidor
            res.status(500).json({ error: 'Error en la consulta' });
        }
    }
    


}
export const institutosController = new InstitutosController();