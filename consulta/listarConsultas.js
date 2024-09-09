const { consultas } = require('../data.js')

const listarConsultas = (req, res) => {
    res.status(200).send(consultas)
}

module.exports = listarConsultas