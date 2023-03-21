module.exports = {
  index(req, res) { 
    res.setHeader('Content-type', 'text/plain;charset=utf8')
    res.write('你好啊')
    res.end()
  },
  user(data, res) { 
    console.log(data)
  }
}