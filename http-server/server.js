const http = require('http')
const router = require('./router')
const server = http.createServer()

server.listen(8080, () => { 
  console.log('http://127.0.0.1:8080')
})

server.on('request', (req, res) => {
  router(req, res)
})