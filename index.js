const express = require('express')
const bodyParser = require('body-parser')
const productsRouter = require('./products/routes')
const cors = require('cors')


const app = express()
const port = process.env.PORT || 4000
app
.use(cors())
.use(bodyParser.json())
.use(productsRouter)
.listen(port, () => console.log(`Listening on port ${port}`))