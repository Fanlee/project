const { User } = require('../model')

exports.list = async (req, res) => {
  // console.log(req.body)
  // const instance = new User(req.body)
  // const u = await instance.save()
  // console.log(u)
  // res.statu(200).json(u)
}

exports.register = async (req, res) => {
  console.log(req.body)
  const instance = new User(req.body)
  const u = await instance.save()
  console.log(u)
  res.status(200).json(u)
}
