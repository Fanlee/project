/*
 * @Author: lihuan
 * @Date: 2023-04-19 22:25:23
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-20 22:35:45
 * @Description:
 */
const express = require('express')
const vodController = require('../controller/vodController')
const videoController = require('../controller/videoController')
const videoValidator = require('../middleware/validator/videoValidator')
const { verfiyToken } = require('../util/jwt')

const router = express.Router()
router.get('/getvod', verfiyToken, vodController.getvod)
router.get('/videolists', verfiyToken, videoController.getvideolist)
router.post(
  '/createvideo',
  verfiyToken,
  videoValidator.createvideo,
  videoController.createvideo
)
module.exports = router
