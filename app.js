// Requireds
// Se importa función
const argv = require('./config/yargs').argv;
const colors = require('colors');
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
// .Se importa función



// Rescata base de line de comandos
let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;
// .Rescata base de line de comandos

switch (comando) {
    case 'listar':
        listarTabla(base, limite);
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo Creado: ${archivo}`.blue))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

// let datos = '';
// for (let i = 1; i <= 10; i++) {
//     datos += `${i} * ${base} = ${i * base}\n`
// }
// // Crea un archivo de texto con los datos
// fs.writeFile(`tablas/tabla del ${base}`, datos, (err) => {
//     if (err) throw err;
//     console.log('El archivo ha sido guardado!');
// });
// // .Crea un archivo de texto con los datos

// Objetos de Node
// console.log(module);
// console.log(process.argv);
// console.log('base', argv.base);
// console.log('limite', argv.limite);
// console.log(process.argv2);
// .Objetos de Node
