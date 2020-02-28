const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    //   res.statusCode = 200;
    //   res.setHeader('Content-Type', 'text/plain');
    //   res.end('Hello World');
    const { headers, method, url } = req;
    let body = [];
    req.on("error", (err) => {
        console.error(err);
    }).on("data", (chunk) => {
        body.push(chunk);
    }).on("end", () => {
        body = Buffer.concat(body).toString();

        res.on('error', (err) => {
            console.error(err);
        });

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        // Note: the 2 lines above could be replaced with this next one:
        // res.writeHead(200, {'Content-Type': 'application/json'})


        /*
        const responseBody = { headers, method, url, body };

        res.write(JSON.stringify(responseBody));
        res.end();
        // Note: the 2 lines above could be replaced with this next one:
        // res.end(JSON.stringify(responseBody))

        */

        res.end('<html><body><h1>Hello, World!</h1></body></html>');
    })
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});