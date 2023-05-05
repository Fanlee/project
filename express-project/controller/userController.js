/*
 * @Author: lihuan
 * @Date: 2023-03-29 22:54:19
 * @LastEditors: lihuan
 * @LastEditTime: 2023-05-05 22:48:34
 * @Description:
 */
const fs = require('fs/promises')
const { User, Subscribe } = require('../model')
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

exports.subscribe = async (req, res) => {
  const userId = req.user.userinfo._id
  const { channelId } = req.params
  if (userId === channelId) {
    return res.status(401).json({ err: '不能关注自己！' })
  }
  const data = await Subscribe.findOne({
    user: userId,
    channel: channelId,
  })
  if (!data) {
    try {
      await new Subscribe({ user: userId, channel: channelId }).save()
      const user = await User.findById(channelId)
      user.subscribeCount++
      await user.save()
      res.status(200).json({ msg: '关注成功' })
    } catch (error) {
      res.status(500).json({ err: error })
    }
  } else {
    res.status(401).json({ err: '已经订阅了此频道！' })
  }
}

exports.unsubscribe = async (req, res) => {
  const userId = req.user.userinfo._id
  const { channelId } = req.params
  if (userId === channelId) {
    return res.status(401).json({ err: '不能取消关注自己！' })
  }
  const record = await Subscribe.findOneAndRemove({
    user: userId,
    channel: channelId,
  })
  if (record) {
    try {
      const user = await User.findById(channelId)
      user.subscribeCount--
      await user.save()
      res.status(200).json({ msg: '取消关注成功' })
    } catch (error) {
      res.status(500).json({ err: error })
    }
  } else {
    res.status(401).json({ err: '没有订阅了此频道！' })
  }
}

exports.channel = async (req, res) => {
  let isSubscribe = false
  // 已登录
  if (req.user) {
    const record = await Subscribe.findOne({
      user: req.user.userinfo._id,
      channel: req.params.channelId,
    })
    if (record) {
      isSubscribe = true
    }
  }
  const { _id, username, image, subscribeCount, cover, channeldes } =
    await User.findById(req.params.channelId)
  res.status(200).json({
    data: {
      _id,
      username,
      image,
      subscribeCount,
      cover,
      channeldes,
      isSubscribe,
    },
  })
}

// 获取关注频道列表
exports.subscribeList = async (req, res) => {
  const data = await Subscribe.find({
    user: req.params.channelId,
  }).populate('channel', '_id username image subscribeCount cover channeldes')

  const result = data.map((item) => item.channel)

  res.status(200).json({ data: result })
}

// 粉丝列表
exports.channelList = async (req, res) => {
  const data = await Subscribe.find({
    channel: req.user.userinfo._id,
  }).populate('user', '_id username image subscribeCount cover channeldes')
  const result = data.map((item) => item.user)

  res.status(200).json({ data: result })
}
