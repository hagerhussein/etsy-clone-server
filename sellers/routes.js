const { Router } = require('express')
const Seller = require('./model')
const bcrypt = require('bcrypt')
const { toJWT } = require('../users/jwt')

const router = new Router()

router.post('/sellers', (req, res, next) => {
  Seller
    .create(req.body)
    .then(seller => {
      if (!seller) {
        return res.status(404).send({
          message: `Please enter a valid email`
        })
      }
      return res.status(201).send({ sellerId: seller.id })
    })
    .catch(error => next(error))
})

router.post('/sellers-login', (req, res, next) => {
  const email = req.body.email
  const password = req.body.password

  if (!email || !password) {
    res.status(400).send({
      message: 'Please enter a correct email and password'
    })
  } else {
    Seller
      .findOne({
        where: {
          email: req.body.email
        }
      })
      .then(seller => {
        if (!seller) {
          res.status(400).send({
            message: 'An account with that email does not exist'
          })
        } else if (bcrypt.compareSync(req.body.password, seller.password)) {
          res.send({
            jwt: toJWT({ sellerId: seller.id })
          })
        } else {
          res.status(400).send({
            message: 'Password is incorrect'
          })
        }
      })
      .catch(err => {
        console.error(err)
        res.status(500).send({
          message: 'Something went wrong'
        })
      })
  }
})

module.exports = router
