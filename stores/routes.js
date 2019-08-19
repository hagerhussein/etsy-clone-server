const { Router } = require('express')
const Store = require('./model')
const Seller = require('../sellers/model')
const authSeller = require('../sellers/authSellerMiddleware')

const router = new Router()

router.get('/stores', (req, res, next) => {
  Store
    .findAll({ include: Seller})
    .then(stores => {
      res.send({ stores: stores })
    })
    .catch(error => next(error))
});


router.get('/stores/:id', (req, res, next) => {
  Store
    .findByPk(req.params.id, { include: Seller })
    .then(store => {
      if (!store) {
        res.status(404).send({
          message: 'Store is not found'
        })
      }
      return res.send({ store })
    })
    .catch(error => next(error))
});

router.post('/stores', authSeller, (req, res, next) => {
  const { sellerId } = req.body
  Store
    .create(req.body)
    .then(store => (
      store
        .set(sellerId))
      .then(store => {
        if (!store) {
          res.status(404).send({
            message: 'Store cannot be created'
          })
        }
        return res.send({ store })
      })
      .catch(error => next(error))
    )
})

module.exports = router