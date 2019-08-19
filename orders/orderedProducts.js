const Sequelize = require('sequelize')
const sequelize = require('../db')
const Order = require('../orders/model')
const Store = require('../stores/model')

const orderedProduct = sequelize.define('orderedProducts', {
  productName: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'product_name'
  },
  price: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false
  },
  size: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  shipped: {
    type: Sequelize.BOOLEAN
  },
  arrived: {
    type: Sequelize.BOOLEAN
  },
  returned: {
    type: Sequelize.BOOLEAN
  }
},
{
  timestamps: false,
  tableName: 'ordered_products'
})
orderedProduct.belongsTo(Order)
orderedProduct.belongsTo(Store)
module.exports = orderedProduct