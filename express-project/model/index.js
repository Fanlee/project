/*
 * @Author: lihuan
 * @Date: 2023-03-30 21:21:03
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-20 22:13:53
 * @Description:
 */
const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost:27017/express-project')
  .then(() => {
    console.log('连接成功！')
  })
  .catch(() => {
    console.log('连接失败！')
  })

module.exports = {
  User: mongoose.model('User', require('./userModel')),
  Video: mongoose.model('Video', require('./videoModel')),
}
