const url = require('url')
const querystring = require('querystring')
const controller = require('./controller')
function router(req, res) { 
  if (req.method === 'GET') {
    console.log(url.parse(req.url, true).query.userid)
    if (req.url === '/') {
      controller.index(req, res)
    } else { 
      res.end('其他路由')
    }
  } else if (req.method === 'POST') {
    let data = ''
    req.on('data', d => { 
      data += d
    })
    req.on('end', () => { 
      controller.user(querystring.parse(data), res)
    })
    res.end()
  }
}
module.exports = router