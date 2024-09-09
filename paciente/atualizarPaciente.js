const { pacientes } = require('../data.js')

const atualizarPaciente = (req, res) => {
    const { id } = req.params
    const novoPaciente = req.body.nomePaciente
    const novoNascimento = req.body.dataNascimento


    const paciente = pacientes.find((pac) => pac.id == id)

    if(!paciente) {
        return res.status(404).send({
            message: 'Paciente não encontrado!'
        })
    }

    paciente.nomePaciente = novoPaciente
    paciente.dataNascimento = novoNascimento

    res.status(200).send({
        message: 'Cadastro do paciente atualizado com sucesso!',
        paciente: paciente
    })
}

module.exports = atualizarPaciente