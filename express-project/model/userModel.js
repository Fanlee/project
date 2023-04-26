/*
 * @Author: lihuan
 * @Date: 2023-03-30 21:58:52
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-26 23:03:01
 * @Description:
 */
const mongoose = require('mongoose')
const md5 = require('../util/md5')
const baseModel = require('./baseModel')
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    set: (value) => md5(value),
    select: false, // 查询的时候不返回这条数据
  },
  phone: {
    type: Number,
    required: true,
  },
  avatar: {
    type: String,
    default: null,
  },
  cover: {
    type: String,
    default: null,
  },
  channeldes: {
    type: String,
    default: null,
  },
  subscribeCount: {
    type: Number,
    default: 0,
  },
  ...baseModel,
})

module.exports = userSchema
