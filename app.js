const { mostrarDatos, guardarDatos } = require('./buscador/buscar');

const { argv } = require('./config/yargs');

let argv2 = process.argv;

let comando = argv._[0];

switch (comando) {
    case 'mostrar':
        mostrarDatos(argv.archivo, argv.pais, argv.anio)
        break;
    case 'guardar':
        guardarDatos(argv.archivo, argv.pais, argv.anio)
        break;
    default:
        console.log('Comando inexistente');
}

console.log(comando);