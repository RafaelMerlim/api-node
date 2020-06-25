const express = require("express")
const bodyParser = require("body-parser")

const app = express()
let port = 3000
app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})

app.use(bodyParser.json())

const users = {

}
/* users['rafael'] = {nome:"rafa", idade:26, city:'rj'}
const {nome, idade, cidade} = users
console.log(idade) */

app.get('/',(req,res) => {

    // pegando do servidor tudo que foi salvo nele.
    res.json({users})
    //console.log(users)

})
app.post('/',(req,res) => {
    //console.log(req.body)

    //pegando a requisição do client.
    const {nome, idade, cidade} = req.body

    //adicionando a requisição do client no objeto(dicionário) users.
    users[nome] = {cidade, idade, nome}

    //resposta do servidor para o client.
    res.json({msg:"usuário criado com sucesso"})

})
app.put('/:nome',(req,res) => {

    //pegando a requisção do client que está na rota.
    const {nome} = req.params

    //pegando a requisição que está no corpo do client.
    const {cidade, idade} = req.body

    //salvando os dados no objeto users que está no servidor.
    users[nome] = {nome, cidade, idade}
    res.json({msg:"usuário editado com sucesso"})

})
app.delete('/:nome',(req,res) => {

    //pegando a requisção do client que está na rota.
    const {nome} = req.params

    //deletando um usuário que foi passado pela rota do client
    delete users[nome]

    res.json({msg:"usuário apagado com sucesso"})

})