const fs = require("fs");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    for (let i = 0; i <= hasta; i++) {
      salida += `${base} x ${i}=${base * i}\n`;
    }
    if (listar) {
      console.log("====================");
      console.log(`Tabla del ${base}`);
      console.log("====================");
      console.log(salida);
    }
    // ejemplo sin writeFileSync
    //   fs.writeFile("tabla-5.txt", salida, (err) => {
    //     if (err) throw err;
    //     console.log("archivo creado");
    //   });
    // };
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  crearArchivo,
};
