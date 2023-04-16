/*
 * @Author: lihuan
 * @Date: 2023-03-29 22:54:19
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-16 22:33:57
 * @Description:
 */
const express = require('express')
const userController = require('../controller/userController')
const userValidator = require('../middleware/validator/userValidator')

const router = express.Router()
const { verfiyToken } = require('../util/jwt')
router.post('/registers', userValidator.register, userController.register)
router.post('/logins', userValidator.login, userController.login)
router.get('/lists', verfiyToken, userController.list)
router.put('/', verfiyToken, userValidator.update, userController.update)

module.exports = router
