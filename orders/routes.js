const { Router } = require('express')
const Order = require('./model')
const auth = require('../users/authMiddleware')

const router = new Router()

router.post('/order', auth, (req, res, next) => {
  const { userId } = req.body

  Order
    .create(req.body)
    .then(order => (
      order
        .set(userId))
      .then(order => {
        if (!order) {
          res.status(404).send({
            message: 'Order cannot be processed'
          })
        }
        return res.send({ order })
      })
      .catch(error => next(error))
    )
})

module.exports = router