const { medicos } = require('../data.js')

const adicionarMedico = (req, res) => {
    const novoMedico = {
        id: medicos.length + 1,
        nomeMedico: req.body.nomeMedico,
        especialidade: req.body.especialidade
    }

    medicos.push(novoMedico)
    res.status(201).send({
        message: 'Um novo médico foi cadastrado com sucesso!',
        medico: novoMedico
    })
}

module.exports = adicionarMedico