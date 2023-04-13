/*
 * @Author: lihuan
 * @Date: 2023-04-13 22:33:23
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-13 23:03:07
 * @Description:
 */
const jwt = require('jsonwebtoken')
const { promisify } = require('util')

const jwtSign = promisify(jwt.sign)

module.exports.createToken = async (userinfo) => {
  return await jwtSign({ userinfo }, 'node-lihuan', {
    expiresIn: 3600,
  })
}
