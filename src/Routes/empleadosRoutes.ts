//rutas para conectar con angular

import { Router } from "express";
import { empleadosControllers } from "../controllers/empleadosControllers";


class empleadosRoutes {
    //inicializamos nuestras rutas con router
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        //muestra todos los datos
        this.router.get("/", [], empleadosControllers.list);
        //muestra un solo dato
        this.router.get("/:id", empleadosControllers.getOne);
        // crear juegos o guardar datos llamamos el metodo desde los controlers
        this.router.post("/", empleadosControllers.create);
        // eliminar datos
        this.router.delete("/:id", empleadosControllers.delete);
        //actualizar el juego o datos
        this.router.put("/:id", empleadosControllers.update);
    }
}

const EmpleadosRoutes = new empleadosRoutes();
export default EmpleadosRoutes.router;
