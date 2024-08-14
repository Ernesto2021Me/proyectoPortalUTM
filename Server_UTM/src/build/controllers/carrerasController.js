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
            }
            catch (error) {
                // Manejar el error y devolver una respuesta adecuada
                res.status(500).json({ error: 'Error en la consulta' });
            }
        });
    }
}
exports.carrerasController = new CarrerasController();
