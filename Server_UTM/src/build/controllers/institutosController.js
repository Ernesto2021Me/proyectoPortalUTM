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
exports.institutosController = void 0;
const database_1 = __importDefault(require("../database"));
class InstitutosController {
    list_institutos_investigacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const respuesta = yield database_1.default.query(`SELECT i.codigo, i.nombre, iI.url
                 FROM institutos i
                 JOIN imagenes_Institutos iI ON i.codigo = iI.codigoInstituto
                 WHERE nombre LIKE '%Instituto%'
                    OR nombre LIKE '%Centro de Estudios%';`);
                res.json(respuesta); // .rows si estás usando pg-pool o pg-promise
            }
            catch (error) {
                res.status(500).json({ error: 'Error en la consulta' });
            }
        });
    }
    one_informacion_general(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.body;
            try {
                // Ejecutar la consulta con parámetros
                const resultado = yield database_1.default.query(`
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
            }
            catch (error) {
                // Manejar el error y devolver una respuesta adecuada
                console.error(error); // Para depurar el error en el servidor
                res.status(500).json({ error: 'Error en la consulta' });
            }
        });
    }
}
exports.institutosController = new InstitutosController();
