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
  // 返回得时候删除密码
  let data = await instance.save()
  // 返回数据的时候删除密码
  const { password, ...user } = data.toJSON()
  res.status(200).json({ user })
}
