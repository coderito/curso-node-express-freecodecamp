const http = require("http");
const cursos = require("./data");

const servidor = http.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return manejarSolicitudGET(req, res);
    case "POST":
      return manejarSolicitudPOST(req, res);

    default:
      res.statusCode = 501;
      console.log(
        `El metodo usado no puede ser manejado por el servidor ${method}`
      );
  }
});

function manejarSolicitudGET(req, res) {
  const path = req.url;

  if (path === "/") {
    res.writeHead(200, {"Content-Type": "application/json"});
    // 200 -> OK (POR DEFECTO)
    // res.statusCode = 200;
    return res.end("Bienvenido al primer servidor y API con NODEJS");
  } else if (path === "/cursos") {
    // res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos));
  } else if (path === "/cursos/programacion") {
    // res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos.programacion));
  } else if (path === "/cursos/matematicas") {
    // res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos.matematicas));
  }

  res.statusCode = 404;
  res.end("Recursos no encontrado");
}

function manejarSolicitudPOST(req, res) {
  const path = req.url;

  if (path === "/cursos/programacion") {
    // res.statusCode = 200;
    return res.end("El servidor recibio una solicitud POST");
  }

  res.statusCode = 404;
  res.end("Recursos no encontrado");
}

const PORT = 3000;

servidor.listen(PORT, () => {
  console.log("Servidor escuchando");
});
