import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

import indexroutes from "./Routes/indexRoutes";
import empleadosRoutes from "./Routes/empleadosRoutes";

class Server {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.start();
    }

    //configuracion del servidor
    config(): void {
        this.app.set("port", process.env.PORT || 3500);
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    //configuracion de rutas
    routes(): void {
        this.app.use("/", indexroutes);
        this.app.use("/api/empleados", empleadosRoutes);
    }

    //el servidor escuchara
    start(): void {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port", this.app.get("port"));
        });
    }
}

const server = new Server();
server.start;