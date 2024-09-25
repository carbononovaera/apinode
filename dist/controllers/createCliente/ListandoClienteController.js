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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListandoClienteController = void 0;
const client_1 = require("../../database/client");
const ListandoClienteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
<<<<<<< HEAD
        const cliente = yield client_1.prisma.cliente.findMany({ orderBy: { id: "asc" } });
=======
        const cliente = yield client_1.prisma.cliente.findMany();
>>>>>>> 8f91e0e1b8a15953ab9ec7bb62e0dfab61087a63
        return res.status(200).json({ message: "Todos Cliente Cadastrado", cliente });
    }
    catch (error) {
        return res.status(400).json({ message: "Error Servidor" });
    }
});
exports.ListandoClienteController = ListandoClienteController;
