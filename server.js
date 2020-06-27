//bibliotecas importadas

// biblioteca que possibilita a criação de um servidor.
const express = require("express")
// biblioteca que habilita o formato json no corpo de uma requisição.
const bodyParser = require("body-parser")
// biblioteca que habilita o mongodb
const mongoose = require("mongoose")
//biblioteca que permite acessar a aplicação de outros servidores
const cors = require("cors")

// quando instaciamos usamoso express, estamos criando um servidor para escutar em uma porta.
// neste caso o servidor esta na variavel app
const app = express()

// Criando a porta.
let port = process.env.PORT || 3000

// colocando o servido para escutar na porta crianda.
app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})

//Aqui o servidor se conecta ao banco de dados mongo. Os demais parametros são alertas da biblioteca com risco de ficar deprecated.
//É necessário passar login e senha, como vemos no caminho.
mongoose.connect("mongodb+srv://api-node2:123@cluster0-q3ex9.mongodb.net/<dbname>?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false})

// bilioteca que permite fazer requisicao em um body no formato json
app.use(bodyParser.json())

// hailitando o servidor de ser acessado de outro local.
app.use(cors())


// Aqui está que qualquer requisição que venha da raiz (/) será redirecionda para o routes.
app.use("/", require("./src/routes"))