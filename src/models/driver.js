'use strict';
const {
    Model, BelongsTo
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Driver extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

        }
    };
    Driver.init({
        id_driver: DataTypes.INTEGER,
        name_driver: DataTypes.STRING,
        date_of_birth: DataTypes.DATE,
        place_of_birth: DataTypes.STRING,
        date_joined: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'Driver',
    });
    return Driver;
};