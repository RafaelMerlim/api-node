const express = require("express")
const bodyParser = require("body-parser")

const mongoose = require("mongoose")

const app = express()
let port = 3000
app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})

mongoose.connect("mongodb+srv://api-node2:123@cluster0-q3ex9.mongodb.net/<dbname>?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true})

app.use(bodyParser.json())


const User = require("./src/models/user")

app.post('/',async (req,res) => {

    // coletando a requisição do client que foi uma criação.
    const {nome, cidade, idade} = req.body
    // passando a requisição coletada do client para o objeto user.
    const user = await User.create({nome, cidade, idade})

    // dando uma resposta para o client se a requisição foi realizada.
    res.json({user})

})