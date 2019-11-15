let opt = {
    archivo: {
        demand: true, //obligatorio
        alias: 'f',
        description: 'Path del arcihvo'
    },
    pais: {
        alias: 'c',
        default: "ECU",
        description: 'Código del pais (default: ECU)'
    },
    anio: {
        alias: 'y',
        default: 1960,
        description: 'Año de las estadisticas (default: 1960)'
    }
};

const argv = require('yargs')
    .command('crear', 'Muestra el resultado de busqueda', opt)
    .command('listar', 'Guarda la busqueda en un archivo .txt', opt)
    .help()
    .argv;


module.exports = {
    argv
};