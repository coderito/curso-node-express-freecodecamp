// Leer, Modificar, Elimnar, Copiar, Modificar Nombre
const fs = require("fs");

// Leer archivo

// fs.readFile("./content/index.html", "utf-8", (error, contenido) => {
//     if ( error ) {
//         console.log(new Error("Erro de archivo, no encontrado"))
//     } else {
//         console.log(contenido)
//     }
// })

// Cambiar Nombre

// fs.rename("./content/index.html", "./content/main.html", (error) => {
//     if ( error ) {
//         throw err
//     }
//     console.log("Nombre cambiado exitosamente")
// })

// Agregar Contenido al final de un archivo

// fs.appendFile("./content/index.html", "<p>Hello new parrafo</p>", (error) => {
//     if( error ) {
//         throw error
//     }
//     console.log("Parrafo Agregado")
// })

// Reemplazar el contenido del archivo

// fs.writeFile("./content/index.html", "Contenido Nuevo", (error) => {
//   if ( error ) {
//     throw error;
//   }

//   console.log("Contenido Cambiado")
// });

// Eliminar Archivo

// fs.unlink("./content/main.html", (error) => {
//   if (error) {
//     throw error;
//   }
//   console.log("Archivo Eliminado");
// });
