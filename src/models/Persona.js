const mongoose = require("mongoose")

// Criando a scheema, que é uma representação de uma tabela do bd mongoose. Contendo os tipos de dados que nela estarão presentes.
const PersonaSchema = new mongoose.Schema(
    {
        // Quando fazemos vinculamos um usuário a uma persona, assim o tipo da coluna deverá ser um id de algo.
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        name: {
            type: String
        },
        sex: {
            type: String
        },
        age: {
            type: String
        },
        role: {
            type: String
        },
        where_works: {
            type: String
        },
        scolarship: {
            type: String
        },
        comunication_means: {
            type: String
        },
        dreams: {
            type: String
        },
        problems: {
            type: String
        },
        company_help: {
            type: String
        },
        company_workers: {
            type: String
        },
        company_role: {
            type: String
        },
        image: {
            type: String
        },
    },
    {
        timestamps: true
    }
)

// Aqui estamos exportando a tabela de fato, pois é nela que será possível fazer as interações. O scheema não passa de uma representação de algo, neste caso da tabela.
// Aqui criamos o model, para termos acesso no arquivo server.js
module.exports = mongoose.model("Persona", PersonaSchema)