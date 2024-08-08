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
    }
}
const carrerasRoutes = new CarrerasRoutes();
exports.default = carrerasRoutes.router;
