import path from 'path'
import dotenv from 'dotenv'
import Express from 'express'

import IndexController from './controllers/IndexController'

// use .env variables
dotenv.config()

const app = new Express()
const port = process.env.PORT || 3000

// Use PUG as template engine
app.set('view engine', 'pug')

// Use src/views as templates root folder
app.set('views', path.join(__dirname, 'views'))

// Use build as static files root folder
app.use(Express.static(path.join(__dirname, '../build')))

// Routes
app.all('/', IndexController)

// Fire up server
app.listen(port, function () {
  console.log(`App server is running on port ${port}`)
})
