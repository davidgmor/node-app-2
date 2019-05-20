const description = {
    demand: true,
    alias: 'd'
}

const completed = {
    default: true,
    demand: false,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva nota', {
        description
    })
    .command('listar', 'Lista todas las notas')
    .command('actualizar', 'Actualiza el estado de una nota', {
        description,
        completed
    })
    .command('borrar', 'Elimina una tarea', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}