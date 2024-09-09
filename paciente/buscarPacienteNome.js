const { pacientes } = require('../data.js')

const buscarPacienteNome = (req, res) => {
    const { nomePaciente } = req.query
    const paciente = pacientes.find((pac) => pac.nomePaciente.toLowerCase().includes(nomePaciente.toLowerCase()))
    console.log(paciente)
    
    if (pacientes.length > 0){
        res.status(200).send(paciente)
    } else {
        res.status(404).send('Paciente não encontrado.')
    }
}

module.exports = buscarPacienteNome