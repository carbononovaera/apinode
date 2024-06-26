import { Request, Response } from "express";
import { prisma } from "../../database/client";


export const DeletarClienteController = async (req: Request, res: Response) => {
	try {
		const { id } = req.body;

		const clienteExiste = await prisma.cliente.findUnique({
			where: {
				id: Number(id)
			}
		});
		if(!clienteExiste){
			return res.status(400).json({massage: "Consumidora não Encontrdo!"});
		}

		const cliente = await prisma.cliente.delete({where: {id: Number(id)}});

		return res.status(200).json({ message: "Seu valor foi pago com sucesso!!", cliente });

	} catch (error) {
		return res.status(400).json({message: "Error Servidor"});
	}

};