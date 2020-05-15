const express = require('express')
const jwt = require('jsonwebtoken')
const _ = require('lodash')
const bodyParser = require('body-parser')
const passport = require('passport')
const passportJWT = require('passport-jwt')
const authorized = require('./middleware/authorized')

const app = express()
const ExtractJWT = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy

const secret = 'secret'

const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken()

jwtOptions.secretOrKey = secret

const strategy = new JwtStrategy(jwtOptions, (jwtPayload, next) => {
  const user = users[_.findIndex(users, { id: jwtPayload.id })]
  if (user) {
    next(null, user)
  } else {
    next(null, false)
  }
})

passport.use(strategy)

app.use(passport.initialize())

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

/* users fake */
const users = [
  {
    id: 1,
    name: 'demo',
    password: 'demo',
    role: 'ADMIN'
  },
  {
    id: 2,
    name: 'jon',
    password: '123',
    role: 'USER'
  }
]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    user: {
      id: req.user.id,
      name: req.user.name,
      role: req.user.role
    }
  })
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.post('/login', (req, res) => {
  if (req.body.name && req.body.password) {
    const name = req.body.name
    const password = req.body.password

    const user = users[_.findIndex(users, { name })]
    if (!user) {
      res.status(401).json('Incorrect payload')
    }

    if (user.password === password) {
      const payload = { id: user.id, role: user.role }
      const token = jwt.sign(payload, jwtOptions.secretOrKey)
      res.json({ message: 'OK', token })
    } else {
      res.status(401).json('Incorrect payload')
    }
  } else {
    res.status(400).json('Bad request')
  }
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.post('/logout', authorized(), (req, res) => {
})

module.exports = {
  path: '/auth',
  handler: app
}
