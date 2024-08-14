"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const institutosController_1 = require("../controllers/institutosController");
class InstitutosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/investigacion', institutosController_1.institutosController.list_institutos_investigacion);
        this.router.post('/informacion_general', institutosController_1.institutosController.one_informacion_general);
    }
}
const institutosRoutes = new InstitutosRoutes();
exports.default = institutosRoutes.router;
