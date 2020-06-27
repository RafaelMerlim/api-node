const mongoose = require("mongoose")

// Criando a scheema, que é uma representação de uma tabela do bd mongoose. Contendo os tipos de dados que nela estarão presentes.
const UserSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
        },
        email: {
            type: String,
            required: true
        },
        cargo: {
            type: String,
        }
        
    },
    {
        timestamps: true
    }
)

// Aqui estamos exportando a tabela de fato, pois é nela que será possível fazer as interações. O scheema não passa de uma representação de algo, neste caso da tabela.
// Aqui criamos o model, para termos acesso no arquivo server.js
module.exports = mongoose.model("User", UserSchema)