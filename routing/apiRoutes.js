function testHandler(res) {
    let data = {
        "hey": "there",
        "whats": "up"
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
    // TBD: manage errors like this gracefully (ie server shouldnt crash)
    // res.end(data);
}

function notFound(res) {
    res.writeHead(404);
    res.end("Sorry, resource not found");
}

const apiRouter = {
    "GET/api/test": testHandler,
    "default": notFound
}

exports.handleApiRoutes = function(req, res) {
    let handler = apiRouter[req.method + req.url] || apiRouter["default"];
    handler(res);
};