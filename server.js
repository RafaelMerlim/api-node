//bibliotecas importadas
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")


const app = express()
let port = 3000
app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})

mongoose.connect("mongodb+srv://api-node2:123@cluster0-q3ex9.mongodb.net/<dbname>?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false})

app.use(bodyParser.json())


// Aqui está que qualquer requisição que venha da raiz (/) será redirecionda para o routes.
app.use("/", require("./src/routes"))