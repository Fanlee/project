const http = require('http')

const server = http.createServer()

server.listen(8080, () => { 
  console.log('http://127.0.0.1:8080')
})

server.on('request', (req, res) => {
  res.setHeader('Content-type', 'text/plain;charset=utf8')
  res.write('你好啊')
  res.end()
})