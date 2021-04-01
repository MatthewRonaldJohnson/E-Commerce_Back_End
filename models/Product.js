// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    //default id
    //product_name (string, NOT NULL)
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //price (decimal, NOT NULL, Validate that entry is a decimal)
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      isDecimal: true,
    },
    //stock (integer, NOT NULL, defaults to 10, validates entry is numeric)
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      isNumeric: true,
    },
    //category_id (integer, refernces category model's id)
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
