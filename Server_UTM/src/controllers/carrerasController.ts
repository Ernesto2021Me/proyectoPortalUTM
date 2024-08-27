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
            SELECT np.codcarrera as codigoCarrera,
i.nombre as codigoInstituto,
n.grado,
n.Nombre as nombre,
n.correo,
n.descripcion_per as descripcion_perfil,
n.SNI,
n.perfil_des as perfil_deseable,
n.imagen as imagen_url
FROM 
NucleoAcademico_pos np
LEFT JOIN NucleoAcademico n on np.id_nucleo=n.id
LEFT JOIN institutos i on n.instituto=i.codigo
WHERE np.codcarrera = ?
ORDER BY np.id;
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

public async alumnos_matriculados(req: Request, res: Response): Promise<void> {
    const { Codigocarrera } = req.body;
    try {
        const resultado = await pool.query(`
           SELECT * FROM 
           MatriculadosPosgrados
WHERE codcarrera= ?
        `, [Codigocarrera]); // Reemplaza Codigocarrera con la variable que contiene el valor del código de carrera
    
        // Devolver los resultados como JSON
        res.json(resultado); // Asegúrate de acceder a 'rows' si esa es la propiedad que contiene los datos
    } catch (error) {
        // Manejar el error y devolver una respuesta adecuada
        res.status(500).json({ error: 'Error en la consulta' });
    }
    
}

public async tutoria_seguimiento(req: Request, res: Response): Promise<void> {
    const { Codigocarrera } = req.body;
    try {
        const resultado = await pool.query(`
        SELECT t.codcarrera as codigoCarrera,
t.alumno as Alumno,
t.generacion as Generacion,
t.director as nombre_dir,
t.codirector as nombre_cod,
t.tutor as nombre_tutor,
t.tema_tesis as tema_tes,
t.linea_investigacion as linea_inv
FROM TutoriaPosgrados t
WHERE codcarrera=?
        `, [Codigocarrera]); // Reemplaza Codigocarrera con la variable que contiene el valor del código de carrera
    
        // Devolver los resultados como JSON
        res.json(resultado); // Asegúrate de acceder a 'rows' si esa es la propiedad que contiene los datos
    } catch (error) {
        // Manejar el error y devolver una respuesta adecuada
        res.status(500).json({ error: 'Error en la consulta' });
    }
    
}

public async productividad_academica_pub(req: Request, res: Response): Promise<void> {
    const { Codigocarrera } = req.body;
    try {
        const resultado = await pool.query(`
        SELECT p.codcarrera as codigoCarrera,
p.year,
p.tipo_publicacion as publicacion,
p.descripcion,
p.autores
FROM ProductividadAcademica_pub p
WHERE codcarrera=?
        `, [Codigocarrera]); // Reemplaza Codigocarrera con la variable que contiene el valor del código de carrera
    
        // Devolver los resultados como JSON
        res.json(resultado); // Asegúrate de acceder a 'rows' si esa es la propiedad que contiene los datos
    } catch (error) {
        // Manejar el error y devolver una respuesta adecuada
        res.status(500).json({ error: 'Error en la consulta' });
    }
    
}

public async productividad_academica_event(req: Request, res: Response): Promise<void> {
    const { Codigocarrera } = req.body;
    try {
        const resultado = await pool.query(`
           SELECT p.codcarrera as codigoCarrera,
p.year,
p.tipo_evento as Evento,
p.descripcion,
p.autores as Ponente
FROM ProductividadAcademica_event p
WHERE codcarrera=?
        `, [Codigocarrera]); // Reemplaza Codigocarrera con la variable que contiene el valor del código de carrera
    
        // Devolver los resultados como JSON
        res.json(resultado); // Asegúrate de acceder a 'rows' si esa es la propiedad que contiene los datos
    } catch (error) {
        // Manejar el error y devolver una respuesta adecuada
        res.status(500).json({ error: 'Error en la consulta' });
    }
    
}

public async productividad_academica_pro(req: Request, res: Response): Promise<void> {
    const { Codigocarrera } = req.body;
    try {
        const resultado = await pool.query(`
           SELECT * FROM 
productividad_academica_proyectos
WHERE codigoCarrera=?
        `, [Codigocarrera]); // Reemplaza Codigocarrera con la variable que contiene el valor del código de carrera
    
        // Devolver los resultados como JSON
        res.json(resultado); // Asegúrate de acceder a 'rows' si esa es la propiedad que contiene los datos
    } catch (error) {
        // Manejar el error y devolver una respuesta adecuada
        res.status(500).json({ error: 'Error en la consulta' });
    }
    
}

public async vinculacion_sec(req: Request, res: Response): Promise<void> {
    const { Codigocarrera } = req.body;
    try {
        const resultado = await pool.query(`
           SELECT * FROM 
vinculacion_sector_pos
WHERE codigoCarrera=?
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