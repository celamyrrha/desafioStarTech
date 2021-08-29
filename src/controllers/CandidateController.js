const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const {cpf, nome, cargo, dt_nasc, est_civil, sexo, endereco, bairro, cidade, cep, tel1, tel2, celular, contato, email, identidade, veiculo, habilitacao} = req.body;

        const newCandidate = new Candidate();

        newCandidate.cpf = cpf;
        newCandidate.nome = nome;
        newCandidate.cargo = cargo;
        newCandidate.dt_nasc = dt_nasc;
        newCandidate.est_civil = est_civil;
        newCandidate.sexo = sexo;
        newCandidate.endereco = endereco;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.cep = cep;
        newCandidate.tel1 = tel1;
        newCandidate.tel2 = tel2;
        newCandidate.celular = celular;
        newCandidate.contato = contato;
        newCandidate.email = email;
        newCandidate.identidade = identidade;
        newCandidate.veiculo = veiculo;
        newCandidate.habilitacao = habilitacao;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Estamos com problemas :(');
            }

            return res.status(200).send(savedCandidate);
        });
    },
}