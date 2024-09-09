const { consultas } = require('../data.js')

const atualizarConsulta = (req, res) => {
    const { id } = req.params
    const novaData = req.body.data
    const novaDescricao = req.body.descricao


    const consulta = consultas.find((con) => con.id == id)

    if(!consulta) {
        return res.status(404).send({
            message: 'Consulta não encontrada!'
        })
    }

    consulta.data = novaData
    consulta.descricao = novaDescricao

    res.status(200).send({
        message: 'Cadastro de consulta atualizada com sucesso!',
        consulta: consulta
    })
}

module.exports = atualizarConsulta