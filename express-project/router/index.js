/*
 * @Author: lihuan
 * @Date: 2023-03-29 22:54:19
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-19 22:42:21
 * @Description:
 */
const express = require('express')
const router = express.Router()

router.use('/user', require('./user'))
router.use('/video', require('./video'))

module.exports = router
