let medicos = [
    { id: 1, nomeMedico: 'Dr. Luis Carlos', especialidade: 'Gastro' },
    { id: 2, nomeMedico: 'Dra. Roberta Miranda', especialidade: 'Dermato' }
]

let pacientes = [
    { id: 1, nomePaciente: 'Larissa Manoela', dataNascimento: '2000-12-13'},
    { id: 2, nomePaciente: 'Joao Guilherme', dataNascimento: '2000-06-25'}
]

let consultas = [
    { id: 1, data: '25-06', idMedico: 1, idPaciente: 1, descricao: 'Consulta de emergência.'},
    { id: 2, data: '25-06', idMedico: 2, idPaciente: 1, descricao: 'Consulta de adasdas.'}
]

module.exports = { medicos, pacientes, consultas }