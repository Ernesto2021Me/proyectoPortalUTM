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
        this.router.post('/productividad_academica_pub', carrerasController_1.carrerasController.productividad_academica_pub);
        this.router.post('/productividad_academica_even', carrerasController_1.carrerasController.productividad_academica_event);
        this.router.post('/productividad_academica_pro', carrerasController_1.carrerasController.productividad_academica_pro);
        this.router.post('/alumnos_matriculados', carrerasController_1.carrerasController.alumnos_matriculados);
        this.router.post('/tutoria', carrerasController_1.carrerasController.tutoria_seguimiento);
        this.router.post('/vinculacion_sectores', carrerasController_1.carrerasController.vinculacion_sec);
    }
}
const carrerasRoutes = new CarrerasRoutes();
exports.default = carrerasRoutes.router;
