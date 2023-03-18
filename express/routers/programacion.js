const express = require("express");
const { infoCursos } = require("../data");

const routerProgramacion = express.Router();

// Middlewere // Despues de recibir una solicitud y antes de enviar una respuesta
routerProgramacion.use(express.json());

routerProgramacion.get("/", (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion));
});

routerProgramacion.get("/:lenguaje", (req, res) => {
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

routerProgramacion.get("/:lenguaje/:nivel", (req, res) => {
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

routerProgramacion.post("/", (req, res) => {
  let cursoNuevo = req.body;
  infoCursos.programacion.push(cursoNuevo);
  res.send(JSON.stringify(infoCursos.programacion));
});

routerProgramacion.put("/:id", (req, res) => {
  const cursoActualizado = req.body;
  const id = req.params.id;

  // buscando el indice por id del curso
  const indice = infoCursos.programacion.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    infoCursos.programacion[indice] = cursoActualizado;
  }
  res.send(JSON.stringify(infoCursos.programacion));
});

routerProgramacion.patch("/:id", (req, res) => {
  const infoNueva = req.body;
  const id = req.params.id;

  const indice = infoCursos.programacion.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    const cursoAModificar = infoCursos.programacion[indice];
    Object.assign(cursoAModificar, infoNueva);
  }
  res.json(JSON.stringify(infoCursos.programacion));
});

routerProgramacion.delete("/:id", (req, res) => {
  const id = req.params.id;

  const indice = infoCursos.programacion.findIndex((curso) => curso.ud == id);
  if (indice >= 0) {
    // Cortando elementos
    infoCursos.programacion.splice(indice, 1);
  }
  res.send(JSON.stringify(infoCursos.programacion));
});

module.exports = routerProgramacion;
