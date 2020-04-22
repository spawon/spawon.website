const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const session = require('express-session')
const config = require('../nuxt.config.js')
const api = require('./api')

// Import and Set Nuxt.js options
config.dev = process.env.NODE_ENV !== 'production'

const sess = {
  secret: 'secret',
  cookie: {}
}

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(express.json())

  if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
  }

  app.use(session(sess))

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  app.use(api.path, api.handler)

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
