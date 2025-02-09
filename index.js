const express = require("express");
const userRouter = require("./src/routes/user");
const personRouter = require("./src/routes/person");
const database = require("./src/database");

const app = express()

app.use(express.json())


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