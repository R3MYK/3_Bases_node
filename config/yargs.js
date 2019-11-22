// Configuración yargs
const opts =
    {
        base: {
            demand: true, // Obligatorio
            alias: 'b' // alias
        },
        limite: {
            alias: 'l',
            default: 10 // Valor por default
        }
    };
const argv = require('yargs')
    .command('listar', 'Imprimme en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;
// .Configuración yargs

// Exports
module.exports = {
    argv
};
// .Exports