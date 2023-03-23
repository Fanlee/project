const express = require('express')
const app = express()

const db = require('./db')

// app.use(express.urlencoded())
app.use(express.json())

app.get('/', async (req, res) => {
  try {
    const jsonData = await db.getUserInfo()
    res.send(jsonData.user)
  } catch (error) {
    res.status(500).json(error)
  }
})

app.post('/', async (req, res) => {
  const body = req.body
  if (!body.username) {
    res.status(403).json({ error: '用户信息不能为空' })
  }
  const jsonObj = await db.getUserInfo()
  body.id = jsonObj.user[jsonObj.user.length - 1].id + 1
  jsonObj.user.push(body)
  try {
    const result = await db.setUser(jsonObj)
    if (!result) {
      res.send({
        msg: '添加成功',
      })
    }
  } catch (error) {
    res.status(500).json({ error: '添加失败' })
  }
})

app.put('/:id', async (req, res) => {
  const userId = req.params.id
  const body = req.body
  const userInfo = await db.getUserInfo()
  let user = userInfo.user.find((item) => item.id === +userId)
  let index = userInfo.user.findIndex((item) => item.id === +userId)
  if (!user) {
    res.status(403).json({ error: 'id不存在' })
  }
  user.username = body.username || user.username
  user.age = body.age || user.age
  userInfo.user[index] = user
  if (!(await db.setUser(userInfo))) {
    res.status(201).json({ msg: '修改成功' })
  }
})

app.listen(3000, () => {
  console.log('run http://127.0.0.1:3000')
})
