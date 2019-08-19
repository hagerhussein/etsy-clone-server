const Sequelize = require('sequelize')
const sequelize = require('../db')
const User = require('../users/model')

const Order = sequelize.define('orders', {
  totalAmount: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
    field: 'total_amount'
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zipcode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    timestamps: true
  },
  orderShipped: {
    type: Sequelize.BOOLEAN
  },
  orderArrived: {
    type: Sequelize.BOOLEAN
  }
},
{
  tableName: 'orders'
})
Order.belongsTo(User)
module.exports = Order