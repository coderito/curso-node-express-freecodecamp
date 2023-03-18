const promesaCumplida = true;

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve("Promesa Cumplida");
    } else {
      reject("Promesa Rechazada");
    }
  }, 3000);
});

const manejadorPromesaCumplida = (valor) => {
  console.log(valor);
};

const manejadorPromesaRechazada = (razonRechazo) => {
  console.log(razonRechazo);
};

miPromesa.then(manejadorPromesaCumplida, manejadorPromesaRechazada);
