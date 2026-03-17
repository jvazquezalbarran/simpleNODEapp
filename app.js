const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("Aplicacion de ejemplo para CI con Docker en Azure");
    res.end();
});

server.listen(3001);

console.log("Servidor ejecutandose en puerto 3001");