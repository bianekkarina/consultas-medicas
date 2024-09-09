const { pacientes } = require('../data.js')

const adicionarPaciente = (req, res) => {
    const novoPaciente = {
        id: pacientes.length + 1,
        nomePaciente: req.body.nomePaciente,
        dataNascimento: req.body.dataNascimento
    }

    pacientes.push(novoPaciente)
    res.status(201).send({
        message: 'Um novo paciente foi cadastrado com sucesso!',
        paciente: novoPaciente
    })
}

module.exports = adicionarPaciente