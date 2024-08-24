import { Request, Response } from "express";
import { prisma } from "../../database/client";


export const ListandoClienteController = async (req: Request, res: Response) => {
	try {
		const cliente = await prisma.cliente.findMany();

		return res.status(200).json({ message: "Todos Cliente Cadastrado", cliente  });

	} catch (error) {
		return res.status(400).json({message: "Error Servidor"});
	}


};