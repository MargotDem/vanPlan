module.exports = function(sequelize: any, DataTypes: any) {
    return sequelize.define('item', {
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        category_id: {
            type: DataTypes.SMALLINT,
        },
        weight: {
            type: DataTypes.SMALLINT,
        },
        notes: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
    }, {
        // options
    });
}
