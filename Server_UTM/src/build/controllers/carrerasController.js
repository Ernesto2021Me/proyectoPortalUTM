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
                const respuesta = yield database_1.default.query(`SELECT * FROM carreras
             WHERE nombre LIKE 'Maestría%' 
                OR nombre LIKE 'Doctorado%'`);
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
    list_informacion_completa(req, res) {
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
            }
            catch (error) {
                // Manejar el error y devolver una respuesta adecuada
                res.status(500).json({ error: 'Error en la consulta' });
            }
        });
    }
}
exports.carrerasController = new CarrerasController();
