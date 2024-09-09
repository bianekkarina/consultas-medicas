const { medicos } = require('../data.js')

const buscarEspecialidade = (req, res) => {
    const { especialidade } = req.query
    const medico = medicos.find((med) => med.especialidade.toLowerCase().includes(especialidade.toLowerCase()))
    console.log(medico)
    
    if (medicos.length > 0){
        res.status(200).send(medico)
    } else {
        res.status(404).send('Especialidade não encontrada.')
    }
}

module.exports = buscarEspecialidade