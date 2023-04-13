/*
 * @Author: lihuan
 * @Date: 2023-04-11 23:01:56
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-13 22:08:23
 * @Description:
 */
const { body } = require('express-validator')
const validator = require('./errors')
const { User } = require('../../model')

module.exports.register = validator([
  body('username')
    .notEmpty()
    .withMessage('用户名不能为空')
    .bail()
    .isLength({ min: 3 })
    .withMessage('用户名长度不能小于3')
    .bail(),
  body('email')
    .notEmpty()
    .withMessage('邮箱不能为空')
    .bail()
    .isEmail()
    .withMessage('邮箱格式不正确')
    .bail()
    .custom(async (val) => {
      const email = await User.findOne({ email: val })
      if (email) {
        return Promise.reject('邮箱已被注册')
      }
    })
    .bail(),
  body('phone')
    .notEmpty()
    .withMessage('手机号不能为空')
    .bail()
    .custom(async (val) => {
      const phone = await User.findOne({ phone: val })
      if (phone) {
        return Promise.reject('手机号已被注册')
      }
    })
    .bail(),
  body('password')
    .notEmpty()
    .withMessage('密码不能为空')
    .bail()
    .isLength({ min: 6 })
    .withMessage('密码不能小于6位')
    .bail(),
])

module.exports.login = validator([
  body('phone').notEmpty().withMessage('手机号不能为空').bail(),
  body('password').notEmpty().withMessage('密码不能为空').bail(),
])
