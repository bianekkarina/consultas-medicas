const { pacientes } = require('../data.js')

const listarPacientes = (req, res) => {
    res.status(200).send(pacientes)
}

module.exports = listarPacientes