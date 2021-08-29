const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    cpf: { type: String, unique: true, required: true }, 
    nome: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: true },
    dt_nasc: { type: Date, unique: false, required: true },
    est_civil: { type: String, unique: false, required: false },
    sexo: { type: String, unique: false, required: false },
    endereco: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true },
    tel1: { type: String, unique: false, required: false },
    tel2: { type: String, unique: false, required: false },
    celular: { type: String, unique: false, required: true },
    contato: { type: String, unique: false, required: true },
    email: { type: String, unique: false, required: true },
    identidade: { type: String, unique: false, required: false },
    habilitacao: { type: String, unique: false, required: false },
    veiculo: { type: String, unique: false, required: false }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Candidate', CandidateSchema);