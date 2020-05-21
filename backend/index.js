const express = require("express");
const app = express();

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
*   Request Body:
*/
app.get("/users/:id", (req, res) => {
    const params = req.params;

    console.log(params)
    return res.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Jean Miranda"
    })
});

app.listen(3333);