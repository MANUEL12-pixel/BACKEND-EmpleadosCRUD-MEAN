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
exports.empleadosControllers = void 0;
const database_1 = __importDefault(require("../database"));
class EmpleadosControllers {
    //metodo para listar
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query(`SELECT * FROM empleado`);
            res.json(games);
        });
    }
    //metodo para consultar uno
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const empleado = yield database_1.default.query("SELECT * FROM empleado WHERE id = ?", [id]);
            if (empleado.length > 0) {
                return res.json(empleado[0]);
            }
            else {
                res.status(404).json({ text: "El empleado no existe" });
            }
            res.json(empleado);
        });
    }
    //metodo para crear
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`INSERT INTO empleado set ?`, [req.body]);
            console.log(req.body);
            res.json({ text: "creando empleado" });
        });
    }
    //metodo para eliminar
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("DELETE FROM empleado WHERE id = ?", [id]);
            res.json({ text: "empleado eliminado" });
        });
    }
    //metodo para actualizar
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("UPDATE empleado set ? WHERE id = ?", [req.body, id]);
            res.json({ text: "el empleado fue actualizado" });
        });
    }
}
exports.empleadosControllers = new EmpleadosControllers();
exports.default = EmpleadosControllers;
