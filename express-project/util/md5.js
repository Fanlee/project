/*
 * @Author: lihuan
 * @Date: 2023-03-30 22:34:21
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-11 22:10:01
 * @Description:
 */
const crypto = require('crypto')
console.log(crypto)
module.exports = (str) => {
  return crypto
    .createHash('md5')
    .update('node' + str)
    .digest('hex')
}