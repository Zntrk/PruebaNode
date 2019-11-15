//const { crearArchivo, listarTabla } = require('./buscador/buscar');

const { argv } = require('./config/yargs');

let argv2 = process.argv;

let comando = argv._[0];

switch (comando) {
    case 'mostrar':
        crearArchivo(argv.archivo, argv.pais, argv.anio)
        break;
    case 'guardar':
        listarTabla(argv.archivo, argv.pais, argv.anio)
        break;
    default:
        console.log('Comando inexistente');
}

console.log(comando);