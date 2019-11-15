const csv = require('csv-parser');
const fs = require('fs');


let mostrarDatos = (archivo, pais, anio) => {
    return new Promise((resolve, reject) => {
        if (!isNaN(anio)) {
            reject('El parametro año no es un numero');
            return;
        }


        fs.createReadStream(String(archivo))
            .pipe(csv())
            .on('data', (row) => {
                const filas = Object.assign(row);
                if (filas === pais) {
                    const ndata = Object.assign(row);
                    console.log(row);
                }

            })
            .on('end', () => {
                console.log('Archivo CSV procesado  con exito');
            });


    });
}



let guardarDatos = (archivo, pais, anio) => {
    return new Promise((resolve, reject) => {
        if (!isNaN(anio)) {
            reject('El parametro año no es un numero');
            return;
        }

        const nedata
        fs.createReadStream(String(archivo))
            .pipe(csv())
            .on('data', (row) => {
                const filas = Object.assign(row);
                if (filas === pais) {
                    const ndata = Object.assign(row);
                    console.log(row);
                }

            })
            .on('end', () => {
                console.log('Archivo CSV procesado  con exito');
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