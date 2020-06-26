// Neste arquivo ficarão todas as rotas que o nosso backand ira acessar.

//biblioteca sendo importada
const express = require("express")

// Aqui ja foi criada a rota, usando a biblioteca express.
const routes = express.Router()

// Aqui estou importando o user constroller, onde está o comando de armazenamento do usuário no bd.
const UserController = require("./controllers/UserController")

// CRUD users
routes.post('/user',UserController.create)
routes.put('/user/:userId',UserController.update)
routes.get('/user',UserController.list)
routes.get('/user/:userId',UserController.show)
routes.delete('/user/:userId',UserController.delete)



// Aqui estamos exportando a rota para ser usada no arquivo serve.js.
module.exports = routes