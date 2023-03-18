let infoCurso = {
  titulo: "Aprende NodeJs",
  numDeVista: 45,
  numDeLike: 312,
  temas: ["Javascript", "NodeJs"],
  isPublic: true,
};

console.log(typeof infoCurso);

// Objeto - Formato json
let infoCursoJson = JSON.stringify(infoCurso);
console.log(infoCursoJson);
console.log(typeof infoCursoJson); // String
console.log(infoCurso.titulo)

// Formato json -> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJson);
console.log(typeof infoCurso)

