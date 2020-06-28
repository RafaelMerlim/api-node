// Este será apenas um objeto que irá exportar algumas funções.
// Em toda a pasta controller ficara a parte lógica da api.

// Após criar o model (a tabela) no arquivo model.js precisamos consumir ele aqui para responder o client e salvar os dados na tabela criada.
// E esta tabela ficará armazenada no banco de dados.
const User = require("c:/Users/rafam/Documents/1_CURSOS/Desenvolvimento_Web/node/api-node/src/models/User")

// req e res devem ficar sempre nesta ordem.
module.exports = {

    async show(req,res) {
        try{
            const {userId} = req.params

            const users = await User.find({_id:userId})

            if (users.length === 0) {
                return res.status(401).json({error: "Nenhum usuário cadastrado com este Id."})
            }

            return res.status(200).json({users})

        }
        catch(err) {
            console.log(err)
            return res.status(500).json({msg: "Problemas no servidor"})
        }

    },

    async list(req,res) {
        try{

            const users = await User.find()
            return res.status(200).json({users})

        }
        catch(err) {
            console.log(err)
            return res.status(500).json({msg: "Problemas no servidor"})
        }

    },

    async create(req,res) {

        // try e catch é o tratamento de erro, como o try except do python.
        try{
            // coletando a requisição do client que foi uma criação.
            const {nome, email, cargo} = req.body
            
            const userExist = await User.find({email})

            if (userExist) {
                return res.status(401).json({error: "Já existe um usuário com este email."})
            }
            // passando a requisição coletada do client para o objeto user.
            // await é uma forma de dizer para o código esperar esta linha realizar a operação para depois ir para a próxima linha.
            // aqui estamos atribuido os dados a variavel somente para dar uma resposta para client do que foi criado.
            // Mas o que importa é oque esta sendo passado dentro de User.create, isto é o que está sendo adicionado na tabela.
            const user =  await User.create({nome, email, cargo})
        
            // dando uma resposta para o client se a requisição foi realizada.
            return res.status(201).json({user})
        }
        catch (err) {

            // err é uma variável criada que receberá o erro e assim poderemos identificar oque está acontecendo.
            console.log(err)
            return res.status(500).json({msg: "Problemas no servidor"})
        }
        
    
    },

    async update(req,res) {

        // try e catch é o tratamento de erro, como o try except do python.
        try{

            // coletando a requisição do client que foi uma criação.
            const {nome, email, cargo} = req.body

            const { userId } = req.params
            
            const userExist = await User.findById({_id: userId})
            
            if (!userExist) {
                return res.status(401).json({error: "Não é possível atualizar um usuário não cadastrado"})
            }


            const user = await User.findByIdAndUpdate({_id:userId}, {nome, email, cargo}, {new: true})
        
            // dando uma resposta para o client se a requisição foi realizada.
            return res.status(200).json({user})
        }
        catch (err) {

            // err é uma variável criada que receberá o erro e assim poderemos identificar oque está acontecendo.
            console.log(err)
            return res.status(500).json({msg: "Problemas no servidor"})
        }
        
    
    },

    async delete(req,res) {

        // try e catch é o tratamento de erro, como o try except do python.
        try{

            const { userId } = req.params

            const userExist = await User.findById({_id: userId})
            
            if (!userExist) {
                return res.status(401).json({error: "Não é possível deletar um usuário não cadastrado"})
            }

            const user = await User.findByIdAndDelete({_id:userId})
        
            // dando uma resposta para o client se a requisição foi realizada.
            return res.json({user})
        }
        catch (err) {

            // err é uma variável criada que receberá o erro e assim poderemos identificar oque está acontecendo.
            console.log(err)
            return res.status(500).json({msg: "Problemas no servidor"})
        }
        
    
    }


}
