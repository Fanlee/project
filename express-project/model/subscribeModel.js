/*
 * @Author: lihuan
 * @Date: 2023-04-26 22:56:58
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-26 22:58:05
 * @Description:
 */
const mongoose = require('mongoose')
const baseModel = require('./baseModel')
const subscribeSchema = new mongoose.Schema({
  user: {
    type: mongoose.ObjectId,
    required: true,
    ref: 'User',
  },
  channel: {
    type: mongoose.ObjectId,
    required: true,
    ref: 'User',
  },
  ...baseModel,
})

module.exports = subscribeSchema
