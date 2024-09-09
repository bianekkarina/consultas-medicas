const { medicos } = require('../data.js')

const buscarMedicoNome = (req, res) => {
    const { nomeMedico } = req.query
    const medico = medicos.find((med) => med.nomeMedico.toLowerCase().includes(nomeMedico.toLowerCase()))
    console.log(medico)
    
    if (medicos.length > 0){
        res.status(200).send(medico)
    } else {
        res.status(404).send('Médico não encontrado.')
    }
}

module.exports = buscarMedicoNome