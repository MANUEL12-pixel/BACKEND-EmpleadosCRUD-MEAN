"use strict";
//rutas para conectar con angular
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleadosControllers_1 = require("../controllers/empleadosControllers");
class empleadosRoutes {
    constructor() {
        //inicializamos nuestras rutas con router
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //muestra todos los datos
        this.router.get("/", [], empleadosControllers_1.empleadosControllers.list);
        //muestra un solo dato
        this.router.get("/:id", empleadosControllers_1.empleadosControllers.getOne);
        // crear juegos o guardar datos llamamos el metodo desde los controlers
        this.router.post("/", empleadosControllers_1.empleadosControllers.create);
        // eliminar datos
        this.router.delete("/:id", empleadosControllers_1.empleadosControllers.delete);
        //actualizar el juego o datos
        this.router.put("/:id", empleadosControllers_1.empleadosControllers.update);
    }
}
const EmpleadosRoutes = new empleadosRoutes();
exports.default = EmpleadosRoutes.router;
