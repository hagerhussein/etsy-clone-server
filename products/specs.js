const Sequelize = require('sequelize')
const sequelize = require('../db')

const Specs = sequelize.define('specs',
{
color: {
  type: Sequelize.STRING,
  allowNull: false
},
size: {
  type: Sequelize.STRING,
  allowNull: false
},
quantity: {
  type: Sequelize.INTEGER,
  allowNull: false
}
},
{
  timestamps: false,
    tableName: 'specs'
})

module.exports = Specs