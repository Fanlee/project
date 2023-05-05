/*
 * @Author: lihuan
 * @Date: 2023-04-20 22:15:44
 * @LastEditors: lihuan
 * @LastEditTime: 2023-05-05 23:18:51
 * @Description:
 */
const { Video, Videocomment } = require('../model')

module.exports.createvideo = async (req, res) => {
  const userId = req.user.userinfo._id
  const body = {
    ...req.body,
    user: userId,
  }
  const videoModel = new Video(body)

  try {
    const result = await videoModel.save()
    res.status(200).json({ data: result })
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports.videolist = async (req, res) => {
  const { pageNum = 1, pageSize = 10 } = req.body
  try {
    const data = await Video.find()
      .skip((pageNum - 1) * pageSize)
      .limit(pageSize)
      .sort({ createAt: -1 })
      .populate('user', '_id username cover')
    const total = await Video.countDocuments()
    res.status(200).json({ data, total })
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports.video = async (req, res) => {
  const { videoId } = req.params
  const data = await Video.findById(videoId).populate(
    'user',
    '_id username cover'
  )
  res.status(200).json(data)
}

// 视频评论
module.exports.comment = async (req, res) => {
  const { videoId } = req.params
  const videoInfo = await Video.findById(videoId)
  if (!videoInfo) {
    return res.status(404).json({ err: '视频不存在' })
  }
  const comment = await new Videocomment({
    content: req.body.content,
    user: req.user.userinfo._id,
    video: videoId,
  }).save()
  videoInfo.commentCount++
  await videoInfo.save()
  res.status(200).json({ data: comment })
}
