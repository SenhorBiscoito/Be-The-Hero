const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);
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

/* 
*   SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
*   NoSQL: MongoDB, CouchDB, etc
*   Vamos usar o *SQLite*
*/

/* 
*   Driver: SELECT * FROM users
*   Query Builder: table("users").select("*").where();
*/


app.listen(3333);