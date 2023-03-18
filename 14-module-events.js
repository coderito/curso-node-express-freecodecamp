const EventEmitter = require("events");

const emisorProductos = new EventEmitter();

emisorProductos.on("compra", (cantidadProducto, total) => {
    console.log(`Se compraron ${cantidadProducto} cantidades, es un total de ${total} dolares`)
});

emisorProductos.emit("compra", 2, 3000)
