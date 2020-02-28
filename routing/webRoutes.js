var fs = require('fs');
var path = require('path');
const { indexController } = require("../controller/index");

exports.handleWebRoutes = function (req, res) {
    var filePath = '.' + req.url;
    if (filePath == './') {
        indexController(req, res);
    } else {
        var extname = String(path.extname(filePath)).toLowerCase();
        var mimeTypes = {
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.css': 'text/css',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.wav': 'audio/wav',
            '.mp4': 'video/mp4',
            '.woff': 'application/font-woff',
            '.ttf': 'application/font-ttf',
            '.eot': 'application/vnd.ms-fontobject',
            '.otf': 'application/font-otf',
            '.wasm': 'application/wasm'
        };

        var contentType = mimeTypes[extname] || 'application/octet-stream';

        fs.readFile(filePath, (error, content) => {
            if (error) {
                if (error.code == "ENOENT") {
                    fs.readFile("./404.html", (error, content) => {
                        res.statusCode = 404;
                        res.setHeader("Content-Type", "text/html");
                        res.end(content, "utf-8");
                    })
                } else {
                    res.statusCode = 500;
                    res.end(`sorry, there was a problem, error: ${error.code}`);
                }
            } else {
                res.statusCode = 200;
                res.setHeader("Content-Type", contentType);
                res.end(content, "utf-8");
            }
        });
    }
};
