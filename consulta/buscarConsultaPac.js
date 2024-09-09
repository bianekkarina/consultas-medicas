const { consultas } = require('../data.js')

const buscarConsultaPac = (req, res) => {
    const { idPaciente } = req.query
    const consulta = consultas.filter((con) => con.idPaciente == idPaciente)
    
    if (consultas.length > 0){
        res.status(200).send(consulta)
    } else {
        res.status(404).send('Consulta não encontrada.')
    }
}

module.exports = buscarConsultaPac