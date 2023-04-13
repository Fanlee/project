/*
 * @Author: lihuan
 * @Date: 2023-03-29 22:54:19
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-13 22:37:08
 * @Description:
 */
const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const userValidator = require('../middleware/validator/userValidator')

router.post('/registers', userValidator.register, userController.register)
router.post('/logins', userValidator.login, userController.login)
router.get('/lists', userController.list)

module.exports = router
