/*
 * @Author: lihuan
 * @Date: 2023-03-29 22:54:19
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-17 22:57:33
 * @Description:
 */
const fs = require('fs/promises')
const { User } = require('../model')
const { createToken } = require('../util/jwt')

exports.register = async (req, res) => {
  const instance = new User(req.body)
  // 返回的时候删除密码
  let data = await instance.save()
  // 返回数据的时候删除密码
  const { password, ...user } = data.toJSON()
  res.status(200).json({ user })
}

exports.login = async (req, res) => {
  let user = await User.findOne(req.body)
  if (!user) {
    return res.status(402).json({ error: '手机号或者密码不正确' })
  }
  user = user.toJSON()
  user.token = await createToken(user)
  res.status(200).json(user)
}

exports.list = async (req, res) => {
  // res.statu(200).json(u)
  res.send('/lists')
}

exports.update = async (req, res) => {
  const result = await User.findByIdAndUpdate(req.user.userinfo._id, req.body, {
    new: true,
  })
  res.status(200).json({ user: result })
}

exports.upload = async (req, res) => {
  console.log(req.file)
  const filename = req.file.originalname
  const str = filename.split('.')
  const fileType = str[str.length - 1]

  try {
    await fs.rename(
      `./public/${req.file.filename}`,
      `./public/${req.file.filename}.${fileType}`
    )
    res.status(200).json({ filepath: `${req.file.filename}.${fileType}` })
  } catch (error) {
    res.status(500).json({ err: error })
  }
}
