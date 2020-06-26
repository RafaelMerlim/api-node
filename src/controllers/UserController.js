// Este será apenas um objeto que irá exportar algumas funções.
// Em toda a pasta controller ficara a parte lógica da api.

// Após criar o model (a tabela) no arquivo model.js precisamos consumir ele aqui para responder o client e salvar os dados na tabela criada.
// E esta tabela ficará armazenada no banco de dados.
const User = require("../models/user")

// req e res devem ficar sempre nesta ordem.
module.exports = {

    async show(req,res) {
        try{
            const {userId} = req.params
            const users = await User.find({_id:userId})
            console.log(users)
            res.json({users})

        }
        catch(err) {
            console.log(err)
            res.json({msg: "Problemas no servidor"})
        }

    },

    async list(req,res) {
        try{

            const users = await User.find()
            console.log(users)
            res.json({users})

        }
        catch(err) {
            console.log(err)
            res.json({msg: "Problemas no servidor"})
        }

    },

    async create(req,res) {

        // try e catch é o tratamento de erro, como o try except do python.
        try{
            // coletando a requisição do client que foi uma criação.
            const {nome, cidade, idade} = req.body
        
            // passando a requisição coletada do client para o objeto user.
            // await é uma forma de dizer para o código esperar esta linha realizar a operação para depois ir para a próxima linha.
            // aqui estamos atribuido os dados a variavel somente para dar uma resposta para client do que foi criado.
            // Mas o que importa é oque esta sendo passado dentro de User.create, isto é o que está sendo adicionado na tabela.
            const user =  await User.create({nome, cidade, idade})
        
            // dando uma resposta para o client se a requisição foi realizada.
            res.json({user})
        }
        catch (err) {

            // err é uma variável criada que receberá o erro e assim poderemos identificar oque está acontecendo.
            console.log(err)
            res.json({msg: "Problemas no servidor"})
        }
        
    
    },

    async update(req,res) {

        // try e catch é o tratamento de erro, como o try except do python.
        try{

            // coletando a requisição do client que foi uma criação.
            const {nome, cidade, idade} = req.body

            const { userId } = req.params
            const user = await User.findByIdAndUpdate({_id:userId}, {nome, cidade, idade}, {new: true})
        
            // dando uma resposta para o client se a requisição foi realizada.
            res.json({user})
        }
        catch (err) {

            // err é uma variável criada que receberá o erro e assim poderemos identificar oque está acontecendo.
            console.log(err)
            res.json({msg: "Problemas no servidor"})
        }
        
    
    },

    async delete(req,res) {

        // try e catch é o tratamento de erro, como o try except do python.
        try{

            const { userId } = req.params
            const user = await User.findByIdAndDelete({_id:userId})
        
            // dando uma resposta para o client se a requisição foi realizada.
            res.json({user})
        }
        catch (err) {

            // err é uma variável criada que receberá o erro e assim poderemos identificar oque está acontecendo.
            console.log(err)
            res.json({msg: "Problemas no servidor"})
        }
        
    
    },


}
