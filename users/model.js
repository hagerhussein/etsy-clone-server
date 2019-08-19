const Sequelize = require('sequelize')
const sequelize = require('../db')
const bcrypt = require('bcrypt')


const User = sequelize.define('users',
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
    favoriteStores: {
      type: Sequelize.ARRAY(Sequelize.STRING)
    }
  },
  {
    timestamps: false,
    tableName: 'users'
  }
)

User.beforeCreate(function (user, options) {
  return bcrypt.hash(user.password, 10)
    .then(hash => {
      user.password = hash;
    })
    .catch(err => {
      new Error()
    })
}
)

module.exports = User