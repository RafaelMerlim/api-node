// Neste arquivo ficarão todas as rotas que o nosso backand ira acessar.

//biblioteca sendo importada
const express = require("express")

// Aqui ja foi criada a rota, usando a biblioteca express.
const routes = express.Router()

// Aqui estou importando o user constroller, onde está o comando de armazenamento do usuário e personas no bd.
const UserController = require("./controllers/UserController.js")
const PersonaController = require("./controllers/PersonaController.js")

// CRUD USUARIOS
routes.post('/user',UserController.create)
routes.put('/user/:userId',UserController.update)
routes.get('/user',UserController.list)
routes.get('/user/:userId',UserController.show)
routes.delete('/user/:userId',UserController.delete)

//CRUD DE PERSONAS
routes.post('/persona',PersonaController.create)
routes.put('/persona/:personaId',PersonaController.update)
routes.get('/persona',PersonaController.list)
routes.get('/persona/:personaId',PersonaController.show)
routes.delete('/persona/:personaId',PersonaController.delete)


// Aqui estamos exportando a rota para ser usada no arquivo serve.js.
module.exports = routes