/*
 * @Author: lihuan
 * @Date: 2023-04-19 22:25:23
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-19 22:25:23
 * @Description:
 */
const express = require('express')
const vodController = require('../controller/vodController')

const router = express.Router()
router.get('/getvod', vodController.getvod)
module.exports = router
