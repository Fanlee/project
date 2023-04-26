/*
 * @Author: lihuan
 * @Date: 2023-04-13 22:33:23
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-16 22:15:42
 * @Description:
 */
const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const { secretKey } = require('../config/config.default')

const jwtSign = promisify(jwt.sign)
const jwtVerfiy = promisify(jwt.verify)

module.exports.createToken = async (userinfo) => {
  return await jwtSign({ userinfo }, secretKey, {
    expiresIn: 60 * 60 * 24,
  })
}

module.exports.verfiyToken =
  (required = true) =>
  async (req, res, next) => {
    let token = req.headers.authorization
    token = token ? token.split('Bearer ')[1] : null
    if (token) {
      try {
        const userinfo = await jwtVerfiy(token, secretKey)
        req.user = userinfo
        next()
      } catch (error) {
        res.status(402).json({ error: '无效的token' })
      }
    } else if (required) {
      res.status(402).json({ error: '请传入token' })
    } else {
      next()
    }
  }
