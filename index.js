const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const { medicos, pacientes, consultas } = require('./data.js')

app.get('/', (req, res) => {
    res.send('Servidor express está funcionando!')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

// rotas para os médicos

const adicionarMedico = require('./medico/adicionarMedico.js')
app.post('/medico', adicionarMedico)

const listarMedicos = require('./medico/listarMedicos.js')
app.get('/medico', listarMedicos)

const atualizarMedico = require('./medico/atualizarMedico.js')
app.put('/medico/:id', atualizarMedico)

const deletarMedico = require('./medico/deletarMedico.js')
app.delete('/medico/:id', deletarMedico)

const buscarMedicoNome = require('./medico/buscarMedicoNome.js')
app.get('/medico/nomeMedico', buscarMedicoNome)

const buscarEspecialidade = require('./medico/buscarEspecialidade.js')
app.get('/medico/especialidade', buscarEspecialidade)

// rotas para os pacientes

const adicionarPaciente = require('./paciente/adicionarPaciente.js')
app.post('/paciente', adicionarPaciente)

const listarPacientes = require('./paciente/listarPacientes.js')
app.get('/paciente', listarPacientes)

const atualizarPaciente = require('./paciente/atualizarPaciente.js')
app.put('/paciente/:id', atualizarPaciente)

const deletarPaciente = require('./paciente/deletarPaciente.js')
app.delete('/paciente/:id', deletarPaciente)

const buscarPacienteNome = require('./paciente/buscarPacienteNome.js')
app.get('/paciente/nomePaciente', buscarPacienteNome)

const buscarPacienteNasc = require('./paciente/buscarPacienteNasc.js')
app.get('/paciente/dataNascimento', buscarPacienteNasc)

// rotas para as consultas

const adicionarConsulta = require('./consulta/adicionarConsulta.js')
app.post('/consulta', adicionarConsulta)

const listarConsultas = require('./consulta/listarConsultas.js')
app.get('/consulta', listarConsultas)

const atualizarConsulta = require('./consulta/atualizarConsulta.js')
app.put('/consulta/:id', atualizarConsulta)

const deletarConsulta = require('./consulta/deletarConsulta.js')
app.delete('/consulta/:id', deletarConsulta) 


const buscarConsultaMed = require('./consulta/buscarConsultaMed.js')
app.get('/consulta/idMedico', buscarConsultaMed)

const buscarConsultaPac = require('./consulta/buscarConsultaPac.js')
app.get('/consulta/idPaciente', buscarConsultaPac)