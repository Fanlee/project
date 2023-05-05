/*
 * @Author: lihuan
 * @Date: 2023-04-20 21:47:34
 * @LastEditors: lihuan
 * @LastEditTime: 2023-05-05 23:04:17
 * @Description:
 */

const mongoose = require('mongoose')
const baseModel = require('./baseModel')
const videoCommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  video: {
    type: mongoose.ObjectId,
    required: true,
    ref: 'Video',
  },
  user: {
    type: mongoose.ObjectId,
    required: true,
    ref: 'User',
  },
  ...baseModel,
})

module.exports = videoCommentSchema
