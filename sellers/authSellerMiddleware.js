const Seller = require('./model')
const { toData } = require('../users/jwt')


function authSeller(req, res, next) {
  const auth = req.headers.authorization && req.headers.authorization.split(' ')
  if (auth && auth[0] === 'Bearer' && auth[1]) {
    try {
      const data = toData(auth[1])
      User
        .findByPk(data.sellerId)
        .then(seller => {
          if (!seller) return next('Seller does not exist')

          req.seller = seller
          next()
        })
        .catch(next)
    }
    catch (error) {
      res.status(400).send({
        message: `Error ${error.name}: ${error.message}`,
      })
    }
  }
  else {
    res.status(401).send({
      message: 'Please supply some valid credentials'
    })
  }
}
module.exports = authSeller