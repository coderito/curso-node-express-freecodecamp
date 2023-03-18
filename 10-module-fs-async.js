// Leer, Modificar, Elimnar, Copiar, Modificar Nombre en el orden que se definen
const fs = require("fs");

// Leer archivo

fs.readFileSync("./content/index.html", "utf-8", (error, contenido) => {
    if ( error ) {
        console.log(new Error("Erro de archivo, no encontrado"))
    } else {
        console.log(contenido)
    }
})

// Cambiar Nombre

fs.renameSync("./content/index.html", "./content/main.html", (error) => {
    if ( error ) {
        throw err
    }
    console.log("Nombre cambiado exitosamente")
})

// Agregar Contenido al final de un archivo

fs.appendFileSync("./content/index.html", "<p>Hello new parrafo</p>", (error) => {
    if( error ) {
        throw error
    }
    console.log("Parrafo Agregado")
})

// Reemplazar el contenido del archivo

fs.writeFileSync("./content/index.html", "Contenido Nuevo", (error) => {
  if ( error ) {
    throw error;
  }

  console.log("Contenido Cambiado")
});

// Eliminar archivo

fs.unlinkSync("./content/main.html", (error) => {
  if (error) {
    throw error;
  }
  console.log("Archivo Eliminado");
});
