/*
 * @Author: lihuan
 * @Date: 2023-04-19 22:25:23
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-26 22:21:42
 * @Description:
 */
const express = require('express')
const vodController = require('../controller/vodController')
const videoController = require('../controller/videoController')
const videoValidator = require('../middleware/validator/videoValidator')
const { verfiyToken } = require('../util/jwt')

const router = express.Router()
router.get('/getvod', verfiyToken(), vodController.getvod)
router.get('/videolists', verfiyToken(false), videoController.videolist)
router.get('/video/:videoId', verfiyToken(false), videoController.video)
router.post(
  '/createvideo',
  verfiyToken(),
  videoValidator.createvideo,
  videoController.createvideo
)
module.exports = router
