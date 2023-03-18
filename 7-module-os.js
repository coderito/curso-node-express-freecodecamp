const os = require("os");

console.log(os.cpus());
console.log(os.type());
console.log(os.homedir());
console.log(os.networkInterfaces());
console.log("Tiempo encendido: ", os.uptime());
console.log(os.platform());
console.log(os.userInfo());
