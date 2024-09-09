const { consultas } = require('../data.js')

const buscarConsultaMed = (req, res) => {
    const { idMedico } = req.query
    const consulta = consultas.filter((con) => con.idMedico == idMedico)
    
    if (consultas.length > 0){
        res.status(200).send(consulta)
    } else {
        res.status(404).send('Consulta não encontrada.')
    }
}

module.exports = buscarConsultaMed