module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define("Item", {
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });
    return Item;
}