var fs = require('fs');

exports.indexController = function (req, res) {
    fs.readFile("./view/index.html", (error, content) => {
        if (error) {
            res.statusCode = 500;
            res.end(`sorry, there was a problem, error: ${error.code}`);
        } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(content, "utf-8");
        }
    });
}
