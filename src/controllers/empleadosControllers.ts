import { Request, Response } from "express";
import pool from "../database";

class EmpleadosControllers {
    //metodo para listar
    public async list(req: Request, res: Response) {
        const games = await pool.query(`SELECT * FROM empleado`);
        res.json(games);
    }

    //metodo para consultar uno
    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const empleado = await pool.query("SELECT * FROM empleado WHERE id = ?", [id]);
        if (empleado.length > 0) {
            return res.json(empleado[0]);
        } else {
            res.status(404).json({ text: "El empleado no existe" });
        }
        res.json(empleado);
    }
    //metodo para crear
    public async create(req: Request, res: Response): Promise<void> {
        await pool.query(`INSERT INTO empleado set ?`, [req.body]);
        console.log(req.body);
        res.json({ text: "creando empleado" });
    }

    //metodo para eliminar
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query("DELETE FROM empleado WHERE id = ?", [id]);
        res.json({ text: "empleado eliminado" });
    }

    //metodo para actualizar
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query("UPDATE empleado set ? WHERE id = ?", [req.body, id]);
        res.json({ text: "el empleado fue actualizado" });
    }
}

export const empleadosControllers = new EmpleadosControllers();
export default EmpleadosControllers;
