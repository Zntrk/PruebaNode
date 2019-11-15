const csv = require('csv-parser');
const fs = require('fs');


let mostrarDatos = (archivo, pais, anio) => {
    return new Promise((resolve, reject) => {
        if (!isNaN(anio)) {
            reject('El parametro año no es un numero');
            return;
        }


        fs.createReadStream('datos.csv')
            .pipe(csv())
            .on('data', (row) => {
                const filas = Object.assign(row);
                console.log(row);

            })
            .on('end', () => {
                console.log('');
            });


    });
}



let guardarDatos = (archivo, pais, anio) => {
    return new Promise((resolve, reject) => {
        if (!isNaN(anio)) {
            reject('El parametro año no es un numero');
            return;
        }

        fs.createReadStream('datos.csv')
            .pipe(csv())
            .on('data', (row) => {
                const filas = Object.assign(row);
                console.log(row);
                const ndata = Object.assign(row)
            })
            .on('end', () => {
                console.log('');
            });

        fs.writeFile(`resultados/result+${pais}+${anio}.txt`, ndata, (err) => {
            if (err)
                reject(err);
            else
                resolve(`result+${pais}+${anio}`);
        });


    });
}



module.exports = {
    mostrarDatos: mostrarDatos,
    guardarDatos: guardarDatos

}






//ok