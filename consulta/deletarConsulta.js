const { consultas } = require('../data.js')

const deletarConsulta = (req, res) => {
    const { id } = req.params
    const index = consultas.findIndex((con) => con.id == id)

    if (index === -1) {
        return res.status(400).send('Consulta não encontrada!')
    }

    const consultaDeletada = consultas.splice(index, 1)[0]

    res.status(200).send({
        message: 'Cadastro de consulta deletado com sucesso!',
        medico: consultaDeletada
    })
}

module.exports = deletarConsulta 