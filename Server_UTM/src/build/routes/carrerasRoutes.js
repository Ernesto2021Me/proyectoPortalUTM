"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carrerasController_1 = require("../controllers/carrerasController");
class CarrerasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/licenciaturas', carrerasController_1.carrerasController.list_licenciaturas);
        this.router.get('/posgrados', carrerasController_1.carrerasController.list_posgrados);
        this.router.post('/jefe_carrera', carrerasController_1.carrerasController.list_one_jefe);
        this.router.post('/informacion_licenciatura', carrerasController_1.carrerasController.list_informacion_licenciatura);
        this.router.post('/informacion_posgrado', carrerasController_1.carrerasController.list_informacion_posgrado);
        this.router.post('/nucleo_academico', carrerasController_1.carrerasController.nucleo_academico);
        this.router.post('/linea_de_generacion', carrerasController_1.carrerasController.linea_de_generacion);
    }
}
const carrerasRoutes = new CarrerasRoutes();
exports.default = carrerasRoutes.router;
