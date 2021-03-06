/**
 * Configuration parameters for server.
 */
import express from 'express'
import Routes from './1-api/routes'
import config from './config/config'
import db from './config/typeOrmConnection'
import path from 'path'
import 'regenerator-runtime'

class Server {

  constructor() {
    this.express = express()
  }

  async start() {
    this.express.use(express.urlencoded({ extended: true }))
    await db
    const routes = new Routes(this.express)
    await routes.createRoutes()
    // Production deploy
    if (process.env.NODE_ENV === 'production') {
      this.express.use(express.static(path.resolve(__dirname, '../public/dist')))
      // In this path we deploy the frontend app
      this.express.get(/.*/, (req, res) => res.sendFile(path.resolve(__dirname, '../public/dist/index.html')))
    }
    this.express.listen(config.PORT, () => {
      console.log('Server on port: ' + config.PORT)
    })
  }

}

module.exports = Server
