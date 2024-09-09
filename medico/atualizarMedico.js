const { medicos } = require('../data.js')

const atualizarMedico = (req, res) => {
    const { id } = req.params
    const novoNomeMedico = req.body.nomeMedico
    const novaEspecialidade = req.body.especialidade


    const medico = medicos.find((med) => med.id == id)

    if(!medico) {
        return res.status(404).send({
            message: 'Médico não encontrado!'
        })
    }

    medico.nomeMedico = novoNomeMedico
    medico.especialidade = novaEspecialidade

    res.status(200).send({
        message: 'Cadastro do médico atualizado com sucesso!',
        medico: medico
    })
}

module.exports = atualizarMedico