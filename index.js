const express = require("express");
const userRouter = require("./src/routes/user");
const personRouter = require("./src/routes/person");
const database = require("./src/database");
const ControllerUser = require("./src/controllers/user");
const authMiddleware = require("./src/middleware/user");

const app = express()

app.use(express.json())

// essas duas rotas vao estar sem a autenticacao JWT - nao precisa autenticar pra criar usuario e pode logar sem estar logado
app.post('/api/v1/user', ControllerUser.Create)
app.post('/api/v1/login', ControllerUser.Login)

// middleware de autenticacao aqui
app.use(authMiddleware) // todas as rotas abaixo terao que ser autenticadas
app.use('/api/v1/user', userRouter)
app.use('/api/v1/person', personRouter)

database.db.sync
    ({ force: false })
    .then(() => {
        app.listen(3000, () => {
            console.log("Serviço rodando na porta 3000")
        });
    })
    .catch((e) => {
        console.error(`Não foi possível conectar com o banco: ${e}`)
    })