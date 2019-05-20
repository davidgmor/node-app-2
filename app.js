const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors');

// console.log(argv);

let command = argv._[0];

switch (command) {
    case 'crear':
        let tarea = toDo.crear(argv.description);
        console.log(tarea);
        break;

    case 'listar':
        let listado = toDo.getList();

        for (let tarea of listado) {
            console.log('******POR HACER******'.green)
            console.log(tarea.description)
            console.log('Estado: ', tarea.completed)
            console.log('**********************'.green)
        }
        break;

    case 'actualizar':
        let actulizado = toDo.actualizar(argv.description, argv.completed);
        console.log(actulizado);
        break;

    case 'borrar':
        toDo.borrar(argv.description);
        break;

    default:
        console.log('Comando no reconocido');

}