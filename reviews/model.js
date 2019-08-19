const Sequelize = require('sequelize')
const sequelize = require('../db')
const User = require('../users/model')
const Product = require('../products/model')

const Review = sequelize.define('reviews',
{
    comment: {
      type: Sequelize.STRING,
    },
    number: {
      type: Sequelize.INTEGER,
      allowNUll: false
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
      timestamps: true
    }
  },
  {
    tableName: 'reviews'
})
Review.belongsTo(User)
Review.belongsTo(Product)
module.exports = Review