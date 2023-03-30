const mongoose = require('mongoose')
const md5 = require('../util/md5')

const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: {
    type: String,
    require: true,
    set: (value) => md5(value),
    select: false,
  },
  phone: { type: Number, require: true },
  avatar: { type: String, default: null },
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date, default: Date.now() },
})

module.exports = userSchema
