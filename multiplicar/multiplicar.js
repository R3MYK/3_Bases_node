// Required
const fs = require('fs');
const colors = require('colors');
// .Required

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)){
            reject(`El valor intruducido ${base} no es un numero`);
            return
        }
        let datos = '';
        for (let i = 1; i <= limite; i++) {
            datos += `${i} * ${base} = ${i * base}\n`
        }
        // Crea un archivo de texto con los datos
        fs.writeFile(`tablas/tabla del ${base}.txt`, datos, (err) => {
            if (err) reject(err);
            else
                resolve(`tablas/tabla del ${base}.txt`)
            // console.log('El archivo ha sido guardado!');
        });
    });
};

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <=limite ; i++) {
        console.log(`${i} * ${base} = ${i * base}\n`.green)
    }
};

// Se define el modulo para exportar función
module.exports = {
    crearArchivo,
    listarTabla
};

