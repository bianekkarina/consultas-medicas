const { medicos } = require('../data.js')

const deletarMedico = (req, res) => {
    const { id } = req.params
    const index = medicos.findIndex((med) => med.id == id)

    if (index === -1) {
        return res.status(400).send('Médico não encontrado!')
    }

    const medicoDeletado = medicos.splice(index, 1)[0]

    res.status(200).send({
        message: 'Cadastro do médico deletado com sucesso!',
        medico: medicoDeletado
    })
}

module.exports = deletarMedico 