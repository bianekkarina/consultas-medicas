const { consultas } = require('../data.js')

const adicionarConsulta = (req, res) => {
    const novaConsulta = {
        id: consultas.length + 1,
        idMedico: req.body.idMedico,
        idPaciente: req.body.idPaciente,
        descricao: req.body.descricao
    }

    consultas.push(novaConsulta)
    res.status(201).send({
        message: 'Uma nova consulta foi cadastrada com sucesso!',
        consulta: novaConsulta
    })
}

module.exports = adicionarConsulta