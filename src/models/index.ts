const Sequelize = require('sequelize');

const sequelize = new Sequelize('vanPlan', 'vanPlanUser', 'passeworde', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    define: {
        timestamps: false
    }
});

const ItemModel = sequelize.import('./Items');

module.exports = {
    Item: ItemModel,
}

