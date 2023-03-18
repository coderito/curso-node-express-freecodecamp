const express = require("express");
const { infoCursos } = require("./data");

const app = express();

app.get("/", (req, res) => {
  res.send("Primer servidor, con express");
});

app.get("/api/cursos", (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

app.get("/api/cursos/programacion", (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion));
});

app.get("/api/cursos/matematicas", (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas));
});

app.get("/api/cursos/programacion/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = infoCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje
  );

  if (resultados.length === 0) {
    return res
      .status(404)
      .send(`No se encontro el curso de programacion de ${lenguaje}`);
  }

  if (req.query.ordenar === "vistas") {
    return res.send(
      JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas))
    );
  }

  res.send(JSON.stringify(resultados));
});

app.get("/api/cursos/matematicas/:tema", (req, res) => {
  const tema = req.params.tema;
  const resultados = infoCursos.matematicas.filter(
    (curso) => curso.tema === tema
  );

  if (resultados.length === 0) {
    return res
      .status(404)
      .send(`No se encontro el curso de matematicas de ${tema}`);
  }

  res.send(JSON.stringify(resultados));
});

app.get("/api/cursos/programacion/:lenguaje/:nivel", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;

  const resultados = infoCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
  );

  if (resultados.length === 0) {
    return res
      .status(404)
      .send(
        `No se encontro el curso de programacion de ${lenguaje} con el nivel ${nivel}`
      );
  }

  res.send(JSON.stringify(resultados));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
