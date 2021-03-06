import jwt from 'jsonwebtoken'
import config from '../config/config'

async function createToken(user) {
  const payload = {
          id: user.id,
          email: user.email,
          role: user.role
        },
        token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + config.JWT_EXPIRATION * 3600,
            data: payload,
          },
          config.JWT_SECRET
        )

  return token
}

async function createEmailToken(user) {
  const payload = {
          id: user.id,
          email: user.email,
          role: user.role
        }, token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + config.JWT_RESET_PASSWORD * 3600,
            data: payload,
          },
          config.JWT_SECRET
        )
  return token
}

module.exports = { createToken, createEmailToken }
