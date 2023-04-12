/*
 * @Author: lihuan
 * @Date: 2023-03-29 22:54:19
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-12 22:35:27
 * @Description:
 */
const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const userValidator = require('../middleware/validator/userValidator')

router.get('/list', userController.list)
router.post('/registers', userValidator.register, userController.register)

module.exports = router
