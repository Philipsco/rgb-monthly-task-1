'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category_portofolio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.portofolio, {
        as : 'portofolios',
        foreignKey: 'categoryId',
        constraints: true
      })
    }
  }
  category_portofolio.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'category_portofolio',
    tableName: 'category_portofolios',
  });
  return category_portofolio;
};