const fs = require('fs/promises')

exports.getUserInfo = async function () {
  const data = await fs.readFile('./db.json', 'utf8')
  return JSON.parse(data)
}

exports.setUser = async function (data) {
  const stringData = JSON.stringify(data)
  return await fs.writeFile('./db.json', stringData)
}
