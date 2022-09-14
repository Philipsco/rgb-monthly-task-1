'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class portofolio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.category_portofolio, {
        as: 'category_portofolio',
        foreignKey: 'categoryId',
        constraints: true
      })
    }
  }
  portofolio.init({
    judul_portofolio: {
      allowNull: false,
      type: DataTypes.STRING
    },
    deskripsi: {
      allowNull: false,
      type: DataTypes.STRING
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING
    },
    categoryId:{
      allowNull: false,
      type: DataTypes.NUMBER,
    }
  }, {
    sequelize,
    modelName: 'portofolio',
    tableName: 'portofolios',
  });
  return portofolio;
};