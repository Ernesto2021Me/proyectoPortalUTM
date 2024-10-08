"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carrerasController = void 0;
const database_1 = __importDefault(require("../database"));
class CarrerasController {
    list_licenciaturas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const respuesta = yield database_1.default.query(` SELECT  c.codigoCarrera, c.nombre, c.codigoInstituto, c.siglas,ci.url
             FROM carreras c
             JOIN imagenes_Carreras ci ON c.id_informacion = ci.id_informacion_carrera
             WHERE nombre LIKE 'Ingeniería%' 
                OR nombre LIKE 'Licenciatura%'`);
                res.json(respuesta);
            }
            catch (error) {
                res.status(500).json({ error: 'Error en la consulta' });
            }
        });
    }
    list_posgrados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const respuesta = yield database_1.default.query(`SELECT * 
FROM carreras
WHERE (nombre LIKE 'Maestría%' 
       OR nombre LIKE 'Doctorado%')
  AND nombre NOT IN ('Maestría en Tecnologías de Cómputo Aplicado', 
                     'Doctorado en Tecnologías de Cómputo Aplicado', 
                     'Maestría en Sistemas Distribuidos');`);
                res.json(respuesta);
            }
            catch (error) {
                res.status(500).json({ error: 'Error en la consulta' });
            }
        });
    }
    list_one_jefe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Codigocarrera } = req.body;
            try {
                // Ejecutar la consulta con parámetros
                const resultado = yield database_1.default.query(`
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
            }
            catch (error) {
                // Manejar el error y devolver una respuesta adecuada
                res.status(500).json({ error: 'Error en la consulta' });
            }
        });
    }
    list_informacion_licenciatura(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Codigocarrera } = req.body;
            try {
                // Ejecutar la consulta combinada con parámetros
                const resultado = yield database_1.default.query(`
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
            }
            catch (error) {
                // Manejar el error y devolver una respuesta adecuada
                res.status(500).json({ error: 'Error en la consulta' });
            }
        });
    }
    list_informacion_posgrado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Codigocarrera } = req.body;
            try {
                // Ejecutar la consulta combinada con parámetros
                const resultado = yield database_1.default.query(`
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
            }
            catch (error) {
                // Manejar el error y devolver una respuesta adecuada
                res.status(500).json({ error: 'Error en la consulta' });
            }
        });
    }
    nucleo_academico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Codigocarrera } = req.body;
            try {
                const resultado = yield database_1.default.query(`
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
            }
            catch (error) {
                // Manejar el error y devolver una respuesta adecuada
                res.status(500).json({ error: 'Error en la consulta' });
            }
        });
    }
    linea_de_generacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Codigocarrera } = req.body;
            try {
                const resultado = yield database_1.default.query(`
           SELECT 
codigoCarrera, 
descripcion as descripcion_linea
FROM LineasDeGeneracion 
WHERE codigoCarrera= ?
        `, [Codigocarrera]); // Reemplaza Codigocarrera con la variable que contiene el valor del código de carrera
                // Devolver los resultados como JSON
                res.json(resultado); // Asegúrate de acceder a 'rows' si esa es la propiedad que contiene los datos
            }
            catch (error) {
                // Manejar el error y devolver una respuesta adecuada
                res.status(500).json({ error: 'Error en la consulta' });
            }
        });
    }
    alumnos_matriculados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Codigocarrera } = req.body;
            try {
                const resultado = yield database_1.default.query(`
           SELECT * FROM 
           MatriculadosPosgrados
WHERE codcarrera= ?
        `, [Codigocarrera]); // Reemplaza Codigocarrera con la variable que contiene el valor del código de carrera
                // Devolver los resultados como JSON
                res.json(resultado); // Asegúrate de acceder a 'rows' si esa es la propiedad que contiene los datos
            }
            catch (error) {
                // Manejar el error y devolver una respuesta adecuada
                res.status(500).json({ error: 'Error en la consulta' });
            }
        });
    }
    tutoria_seguimiento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Codigocarrera } = req.body;
            try {
                const resultado = yield database_1.default.query(`
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
            }
            catch (error) {
                // Manejar el error y devolver una respuesta adecuada
                res.status(500).json({ error: 'Error en la consulta' });
            }
        });
    }
    productividad_academica_pub(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Codigocarrera } = req.body;
            try {
                const resultado = yield database_1.default.query(`
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
            }
            catch (error) {
                // Manejar el error y devolver una respuesta adecuada
                res.status(500).json({ error: 'Error en la consulta' });
            }
        });
    }
    productividad_academica_event(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Codigocarrera } = req.body;
            try {
                const resultado = yield database_1.default.query(`
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
            }
            catch (error) {
                // Manejar el error y devolver una respuesta adecuada
                res.status(500).json({ error: 'Error en la consulta' });
            }
        });
    }
    productividad_academica_pro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Codigocarrera } = req.body;
            try {
                const resultado = yield database_1.default.query(`
           SELECT p.codcarrera as codigoCarrera,
p.year,
p.tipo_proyecto as Proyecto,
p.descripcion,
p.autores as participantes,
FROM ProductividadAcademica_proyect p
WHERE codcarrera=?
        `, [Codigocarrera]); // Reemplaza Codigocarrera con la variable que contiene el valor del código de carrera
                // Devolver los resultados como JSON
                res.json(resultado); // Asegúrate de acceder a 'rows' si esa es la propiedad que contiene los datos
            }
            catch (error) {
                // Manejar el error y devolver una respuesta adecuada
                res.status(500).json({ error: 'Error en la consulta' });
            }
        });
    }
    vinculacion_sec(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Codigocarrera } = req.body;
            try {
                const resultado = yield database_1.default.query(`
           SELECT * FROM 
vinculacion_sector_pos
WHERE codigoCarrera=?
        `, [Codigocarrera]); // Reemplaza Codigocarrera con la variable que contiene el valor del código de carrera
                // Devolver los resultados como JSON
                res.json(resultado); // Asegúrate de acceder a 'rows' si esa es la propiedad que contiene los datos
            }
            catch (error) {
                // Manejar el error y devolver una respuesta adecuada
                res.status(500).json({ error: 'Error en la consulta' });
            }
        });
    }
}
exports.carrerasController = new CarrerasController();
