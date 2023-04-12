/*
 * @Author: lihuan
 * @Date: 2023-03-29 22:54:19
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-12 22:49:55
 * @Description:
 */
const { User } = require('../model')

exports.list = async (req, res) => {
  // console.log(req.body)
  // const instance = new User(req.body)
  // const u = await instance.save()
  // console.log(u)
  // res.statu(200).json(u)
}

exports.register = async (req, res) => {
  const instance = new User(req.body)
  // 返回的时候删除密码
  let data = await instance.save()
  // 返回数据的时候删除密码
  const { password, ...user } = data.toJSON()
  res.status(200).json({ user })
}
