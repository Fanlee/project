/*
 * @Author: lihuan
 * @Date: 2023-04-20 22:18:08
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-20 22:20:37
 * @Description:
 */
const { body } = require('express-validator')
const validator = require('./errors')
module.exports.createvideo = validator([
  body('title')
    .notEmpty()
    .withMessage('视频名称不能为空')
    .bail()
    .isLength({ max: 20 })
    .withMessage('不能超过20个字符'),
  body('vodvideoId').notEmpty().withMessage('vod不能为空').bail(),
])
