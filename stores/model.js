const Sequelize = require('sequelize')
const sequelize = require('../db')
const Seller = require('../sellers/model')

const Store = sequelize.define('stores', 
{
name:{
  type: Sequelize.STRING,
  allowNull: false
},
description:{
  type: Sequelize.STRING,
  allowNull: false
},
numberOfSales:{
  type: Sequelize.INTEGER,
  allowNull: false
},
rating:{
  type: Sequelize.DECIMAL,
},
timeCreated:{
  type: Sequelize.DATE,
  allowNull: false,
  timestamps: true
},
location:{
  type: Sequelize.STRING,
  allowNull: false
},
website:{
  type: Sequelize.STRING
},
instagram:{
  type: Sequelize.STRING
},
facebook:{
  type: Sequelize.STRING
},
specialPolicies:{
  type: Sequelize.STRING
},
paymentMethods:{
  type: Sequelize.ARRAY(Sequelize.STRING),
  allowNull: false
},
returnsPolicy:{
  type: Sequelize.STRING,
  allowNull: false
},
shipsTo:{
  type: Sequelize.ARRAY(Sequelize.STRING),
  allowNull: false
}
},
{
tableName: 'stores'
  })
  Store.belongsTo(Seller)
  module.exports = Store