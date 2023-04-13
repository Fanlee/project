/*
 * @Author: lihuan
 * @Date: 2023-03-29 22:54:19
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-13 22:57:28
 * @Description:
 */
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
  // console.log(req.body)
  // const instance = new User(req.body)
  // const u = await instance.save()
  // console.log(u)
  // res.statu(200).json(u)
}
