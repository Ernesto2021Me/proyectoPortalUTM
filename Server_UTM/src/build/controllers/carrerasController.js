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
                const respuesta = yield database_1.default.query(`SELECT * FROM carreras
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
    list_perfil_ingreso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Codigocarrera } = req.body;
            try {
                // Ejecutar la consulta con parámetros
                const resultado = yield database_1.default.query(`
            SELECT 
                ic.perfil_ingreso, 
                c.descripcion 
            FROM 
                informacion_carreras ic 
            JOIN 
                conocimientos c ON ic.id_informacion = c.id_carrera_informacion 
            WHERE 
                ic.Codigocarrera = ?
                AND c.perfil = 1
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
    list_perfil_egreso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Codigocarrera } = req.body;
            console.log(Codigocarrera);
            try {
                // Ejecutar la consulta con parámetros
                const resultado = yield database_1.default.query(`
            SELECT 
                ic.perfil_egreso, 
                c.descripcion 
            FROM 
                informacion_carreras ic 
            JOIN 
                conocimientos c ON ic.id_informacion = c.id_carrera_informacion 
            WHERE 
                ic.Codigocarrera = ?
                AND c.perfil = 2
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
