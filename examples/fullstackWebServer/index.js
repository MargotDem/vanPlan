const http = require('http');
const { handleApiRoutes } = require("./routing/apiRoutes");
const { handleWebRoutes } = require("./routing/webRoutes");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    req.on("error", (err) => {
        console.error(err);
    })
    res.on('error', (err) => {
        console.error(err);
    });
    if (req.url.startsWith("/api/")) {
        handleApiRoutes(req, res);
    } else {
        handleWebRoutes(req, res)
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
