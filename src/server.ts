import express from "express";
import { router } from "./routes/router";
import cors from "cors";

const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
	console.log(`Server Rodando na Porta ${PORT}`);
});