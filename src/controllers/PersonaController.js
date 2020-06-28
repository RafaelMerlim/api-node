// Este será apenas um objeto que irá exportar algumas funções.
// Em toda a pasta controller ficara a parte lógica da api.

// Após criar o model (a tabela) no arquivo model.js precisamos consumir ele aqui para responder o client e salvar os dados na tabela criada.
// E esta tabela ficará armazenada no banco de dados.
const Persona = require("../models/Persona.js")

// req e res devem ficar sempre nesta ordem.
module.exports = {

    async show(req,res) {
        try{
            const {personaId} = req.params

            const personas = await Persona.find({_id:personaId})

            if (personas.length === 0) {
                return res.status(401).json({error: "Nenhum usuário cadastrado com este Id."})
            }

            return res.status(200).json({personas})

        }
        catch(err) {
            console.log(err)
            return res.status(500).json({msg: "Problemas no servidor"})
        }

    },

    async list(req,res) {
        try{

            const personas = await Persona.find()
            return res.status(200).json({personas})

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
            const {owner, name, sex, age, role, where_works, scolarsship, communication_means, dreams, problems, company_help, company_workers, company_role, image} = req.body

            // passando a requisição coletada do client para o objeto user.
            // await é uma forma de dizer para o código esperar esta linha realizar a operação para depois ir para a próxima linha.
            // aqui estamos atribuido os dados a variavel somente para dar uma resposta para client do que foi criado.
            // Mas o que importa é oque esta sendo passado dentro de User.create, isto é o que está sendo adicionado na tabela.
            const persona =  await Persona.create({owner, name, sex, age, role, where_works, scolarsship, communication_means, dreams, problems, company_help, company_workers, company_role, image})
        
            // dando uma resposta para o client se a requisição foi realizada.
            return res.status(201).json({persona})
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
            const {name, sex, age, role, where_works, scolarsship, communication_means, dreams, problems, company_help, company_workers, company_role, image} = req.body

            const { personaId } = req.params
            
            const personaExist = await Persona.findById({_id: personaId})
            
            if (!personaExist) {
                return res.status(401).json({error: "Não é possível atualizar uma persona não cadastrado"})
            }


            const persona = await Persona.findByIdAndUpdate({_id:personaId}, {name, sex, age, role, where_works, scolarsship, communication_means, dreams, problems, company_help, company_workers, company_role, image}, {new: true})
        
            // dando uma resposta para o client se a requisição foi realizada.
            return res.status(200).json({persona})
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

            const { personaId } = req.params

            const personaExist = await Persona.findById({_id: personaId})
            
            if (!personaExist) {
                return res.status(401).json({error: "Não é possível deletar uma persona não cadastrado"})
            }

            const persona = await Persona.findByIdAndDelete({_id:personaId})
        
            // dando uma resposta para o client se a requisição foi realizada.
            return res.json({persona})
        }
        catch (err) {

            // err é uma variável criada que receberá o erro e assim poderemos identificar oque está acontecendo.
            console.log(err)
            return res.status(500).json({msg: "Problemas no servidor"})
        }
        
    
    }


}
