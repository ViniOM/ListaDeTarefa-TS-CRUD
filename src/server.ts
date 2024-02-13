// importa todos os metodos do express que esta sendo chamado por app dentro do arquivo ./app
import { app } from "./app";

// Abre a pora 7070 caso nao tenha uma variavel de ambiente declarada
const port = process.env.PORT || 7070;

// Declara uma constante que recebe a abertura do servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/tasks`);
});

