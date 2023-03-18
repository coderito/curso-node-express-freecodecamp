const estatusPedido = () => {
  const estatus = Math.random() < 0.8; // Aleteoridad de la falla
  return estatus;
};

// for (let i = 0; i < 10; i++) {
//     console.log(estatusPedido()); // Generando en consola la aleatoridad
// }

const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve("Pedido Exitoso");
    } else {
      reject("Ocurrio un error");
    }
  }, 3000);
});

const manejadorPedido = (valor) => {
  console.log(valor);
};

const manejadorDeError = (valorRechazo) => {
  console.log(valorRechazo);
};

// miPedidoDePizza.then(manejadorPedido, manejadorDeError)

miPedidoDePizza.then(manejadorPedido).catch(manejadorDeError);
