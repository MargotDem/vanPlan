const itemsController = require('./controllers/itemsController');

const routes = [
    {
        method: 'GET',
        url: '/items',
        handler: itemsController.findAll,
    },
    {
        method: 'GET',
        url: '/items/:id',
        handler: itemsController.find,
    },
    {
        method: 'POST',
        url: '/items',
        handler: itemsController.create,
    }
]

module.exports = routes;
