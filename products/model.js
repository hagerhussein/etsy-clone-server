const Sequelize = require('sequelize')
const sequelize = require('../db')
const Store = require('../stores/model')
const Specs = require('../products/specs')


const Product = sequelize.define ('products',
{
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  picture: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: { args: [100, 400],
      msg: "Product description must be between 100 and 400 characters in length "
  }
    }
  },
 gender: {
    type: Sequelize.STRING,
    allowNull: false
  },
category: {
  type: Sequelize.STRING,
  allowNull: false
},
subCategory: {
  type: Sequelize.STRING,
  allowNull: false,
  field: 'sub_category'
}
},
 { timestamps: false,
    tableName: 'products'
})
Product.belongsTo(Store)
Product.hasMany(Specs)

module.exports = Product
