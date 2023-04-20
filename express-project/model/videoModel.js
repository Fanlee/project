/*
 * @Author: lihuan
 * @Date: 2023-04-20 21:47:34
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-20 23:05:42
 * @Description:
 */

const mongoose = require('mongoose')
const baseModel = require('./baseModel')
const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  descrption: {
    type: String,
  },
  vodvideoId: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
  },
  user: {
    type: mongoose.ObjectId,
    required: true,
    ref: 'User',
  },
  ...baseModel,
})

module.exports = videoSchema
