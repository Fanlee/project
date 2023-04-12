/*
 * @Author: lihuan
 * @Date: 2023-04-12 22:02:23
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-12 22:08:05
 * @Description:
 */

const { validationResult } = require('express-validator')

module.exports = (validator) => {
  return async (req, res, next) => {
    await Promise.all(validator.map((validate) => validate.run(req)))
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(401).json({ error: errors.array() })
    }
    next()
  }
}
