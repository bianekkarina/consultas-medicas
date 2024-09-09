const { pacientes } = require('../data.js')

const buscarPacienteNasc = (req, res) => {
    const { dataNascimento } = req.query
    const paciente = pacientes.find((pac) => pac.dataNascimento == dataNascimento)
    
    if (pacientes.length > 0){
        res.status(200).send(paciente)
    } else {
        res.status(404).send('Data de nascimento não encontrada.')
    }
}

module.exports = buscarPacienteNasc