var finalhandler = require('finalhandler');
var Router = require('router');
var router = Router();

router.get('/api/tags', function (req, res) {
    let tags = {
        tag1: "blabla",
        tag2: "blehbleh",
    }
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(tags));
})

module.exports = function (req, res) {
    router(req, res, finalhandler(req, res));
};
