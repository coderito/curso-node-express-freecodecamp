// Funciones que ejecutan el codigo luego de un periodo de tiempo

function mostraTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

setTimeout(mostraTema, 2000, "Node");

function suma(num1, num2) {
  console.log(`Estoy aprendiendo ${num1 + num2}`);
}

setTimeout(suma, 5000, 1, 2);

console.log("Antes de setInmediate");

setImmediate(mostraTema, "Java");

// setInterval(suma, 3000, 2, 3);
