const { Router } = require('express')
const Product = require('./model')
const Specs = require('./specs')

const router = new Router()

router.get('/jewelry-and-accessories', (req, res, next) => {
  Product 
  .findAll({ where: {
    category: "jewelry and accessories"
  }})
  .then(products => {
    res.json({ products:products })
  })
  .catch(error => next(error))
});

router.get('/clothing-and-shoes', (req, res, next) =>{
  Product 
  .findAll({ where: {
    category: "clothing and shoes"
  }})
  .then(products => {
    res.json({ products:products })
  })
  .catch(error => next(error))
});

router.get('/home-and-living', (req, res, next) =>{
  Product 
  .findAll({ where: {
    category: "home and living"
  }})
  .then(products => {
    res.json({ products:products })
  })
  .catch(error => next(error))
});

router.get('/toys-and-entertainment', (req, res, next) =>{
  Product 
  .findAll({ where: {
    category: "toys and entertainment"
  }})
  .then(products => {
    res.json({ products:products })
  })
  .catch(error => next(error))
});

router.get('/art-and-collectibles', (req, res, next) =>{
  Product 
  .findAll({ where: {
    category: "art and collectibles"
  }})
  .then(products => {
    res.json({ products:products })
  })
  .catch(error => next(error))
});

router.get('/craft-supplies-and-tools', (req, res, next) =>{
  Product 
  .findAll({ where: {
    category: "craft supplies and tools"
  }})
  .then(products => {
    res.json({ products:products })
  })
  .catch(error => next(error))
});

router.get('/products/:id', (req, res, next) => {
  Product
  .findByPk(req.params.id, {include: Specs})
  .then(product => {
    if(!product) {
      return res.status(404).send({
        message: 'Product does not exist anymore'
      })
    }
    return res.send(product)
  })
  .catch(error => next(error))
});

/* POST, PUT, DELETE products can only be done by the store owners (Seller) who are logged in*/
// router.post('/products', (req, res, next) => {
//   Product
//   .create(req.body)
//   .then(product => {
//     if(!product) {
//       return res.status(406).send({
//         message: 'Product cannot be created'
//       })
//     }
//     return res.status(201).send(product)
//   })
//   .catch(error => next(error))
// })
module.exports = router