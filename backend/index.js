const express = require("express");
const app = express();

app.use(express.json());
/*
*  Rota / Recurso
*/

/* 
*    Métodos HTTP:
*   GET: Buscar uma informação do back-end
*   POST: Criar uma informação no back-end
*   PUT: Atualizar uma informação no back-end
*   DELETE: Deltar uma informação no back-end
*/

/* 
* Tipos de parâmetros:
*
*   Query Params: Parametros nomeados e enviados na rota após "?" (Filtros, paginação) "req.query"
*   Route Params: Parâmetros utilizados para identificar recursos "req.params"
*   Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/
app.post("/users", (req, res) => {
    const body = req.body;

    console.log(body)
    return res.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Cleiton Souza"
    })
});

app.listen(3333);