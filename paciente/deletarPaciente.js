const { pacientes } = require('../data.js')

const deletarPaciente = (req, res) => {
    const { id } = req.params
    const index = pacientes.findIndex((pac) => pac.id == id)

    if (index === -1) {
        return res.status(400).send('Paciente não encontrado!')
    }

    const pacienteDeletado = pacientes.splice(index, 1)[0]

    res.status(200).send({
        message: 'Cadastro do paciente deletado com sucesso!',
        paciente: pacienteDeletado
    })
}

module.exports = deletarPaciente 