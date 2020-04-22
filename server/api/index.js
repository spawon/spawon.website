const express = require('express')
const jwt = require('jsonwebtoken')
const authMiddleware = require('./middleware/auth')

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get('/', authMiddleware(), (req, res) => {
  // const payload = {
  //   name: 'jimmy'
  // }
  //
  // const token = jwt.sign(payload, 'secret')
  // res.send(token)
  return res.json(req.session.authUser)
})

// Add POST - /api/login
router.post('/login', (req, res) => {
  console.log(req.body)
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo' }
    return res.json({ username: 'demo' })
  }
  res.status(401).json({ message: 'Bad credentials' })
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.authUser
  res.json({ ok: true })
})

// Export the server middleware
module.exports = {
  path: '/api',
  handler: router
}
