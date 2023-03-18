const express = require("express");
const { infoCursos } = require("./data");

const app = express();


// Router programacion

const routerProgramacion = require("./routers/programacion")
app.use("/api/cursos/programacion", routerProgramacion);

// Router matematas

const routerMatematicas = require("./routers/matematicas")
app.use("/api/cursos/matematicas", routerMatematicas);

app.get("/", (req, res) => {
  res.send("Primer servidor, con express");
});

app.get("/api/cursos", (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
