const Sequelize = require('sequelize')
const sequelize = require('../db')
const bcrypt = require('bcrypt')


const Seller = sequelize.define('sellers',
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'first_name'
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'last_name'
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    address: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    zipcode: {
      type: Sequelize.INTEGER
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
  },
  {
    timestamps: false,
    tableName: 'sellers'
  }
)

Seller.beforeCreate(function (seller, options) {
  return bcrypt.hash(seller.password, 10)
    .then(hash => {
      selller.password = hash;
    })
    .catch(err => {
      new Error()
    })
}
)

module.exports = Seller