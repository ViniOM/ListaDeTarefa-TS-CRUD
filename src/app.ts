// Configs
require("dotenv").config();
import express from "express";
import logger from "morgan";
import cors from "cors";
import { routes } from "./routes/routes";

// Importa os modulos do express para serem usados pelo app
const app = express();

// Configs
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

// Define uma rota principal para a aplicação Ex: http://localhost:####/tasks/
app.use("/tasks", routes);

// Exporta o app para ser usado por outro arquivo
export { app };
