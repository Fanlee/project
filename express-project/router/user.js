/*
 * @Author: lihuan
 * @Date: 2023-03-29 22:54:19
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-17 22:42:28
 * @Description:
 */
const express = require('express')
const userController = require('../controller/userController')
const userValidator = require('../middleware/validator/userValidator')
const multer = require('multer')
const upload = multer({ dest: 'public/' })

const router = express.Router()
const { verfiyToken } = require('../util/jwt')
router.post('/registers', userValidator.register, userController.register)
router.post('/logins', userValidator.login, userController.login)
router.get('/lists', verfiyToken, userController.list)
router.post(
  '/upload',
  verfiyToken,
  upload.single('avatar'),
  userController.upload
)
router.put('/', verfiyToken, userValidator.update, userController.update)

module.exports = router
