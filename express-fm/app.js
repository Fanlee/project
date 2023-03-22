const express = require('express')
const fs = require('fs')
const { promisify } = require('util')
const app = express()

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

app.use(express.urlencoded())
app.use(express.json())

app.get('/', async (req, res) => {
  try {
    const data = await readFile('./db.json', 'utf8')
    const jsonObj = JSON.parse(data)
    res.send(jsonObj.user)
  } catch (error) {
    res.status(500).json(error)
  }
})

app.post('/', async (req, res) => {
  const body = req.body
  if (!body.username) {
    res.status(403).json({ error: '用户信息不能为空' })
  }
  const data = await readFile('./db.json', 'utf8')
  let jsonObj = JSON.parse(data)
  body.id = jsonObj.user[jsonObj.user.length - 1].id + 1
  jsonObj.user.push(body)
  try {
    const result = await writeFile('./db.json', JSON.stringify(jsonObj))
    if (!result) {
      res.send({
        msg: '添加成功',
      })
    }
  } catch (error) {
    res.status(500).json({ error: '添加失败' })
  }
})

app.listen(3000, () => {
  console.log('run http://127.0.0.1:3000')
})
