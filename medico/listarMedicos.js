const { medicos } = require('../data.js')

const listarMedicos = (req, res) => {
    res.status(200).send(medicos)
}

module.exports = listarMedicos