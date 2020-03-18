const Item = require('../models/index').Item;

exports.findAll = async (req: any, res: any) => {
    let items = await Item.findAll();
    return items;
}

exports.find = async (req: any) => {
    let item = await Item.findAll({
        where: { id: req.params.id}
    });
    return item;
}

exports.create = async () => {
    let item = await Item.create({
        name: 'test',
        category_id: '2',
        status: 0
    });
    return item;
}