const http = require("http");

const servidor = http.createServer((req, res) => {
  res.end("Hello");
  // REQ -> SOLICITUD
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);

  // RES -> RESPUESTA
  console.log(res.statusCode);
  res.statusCode = 404;
  console.log(res.statusCode);
});

const PORT = 3000;

servidor.listen(PORT, () => {
  console.log(`Servidor escuchando ${PORT}`);
});
