const express = require('express')
const bodyParser = require('body-parser')
const productsRouter = require('./products/routes')
const ordersRouter = require('./orders/routes')
const sellersRouter = require('./sellers/routes')
const storesRouter = require('./stores/routes')
const usersRouter = require('./users/routes')
const cors = require('cors')


const app = express()
const port = process.env.PORT || 4000
app
.use(cors())
.use(bodyParser.json())
.use(productsRouter)
.use(ordersRouter)
.use(sellersRouter)
.use(storesRouter)
.use(usersRouter)
.listen(port, () => console.log(`Listening on port ${port}`))