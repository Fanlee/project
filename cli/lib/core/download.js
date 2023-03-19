const download = require('download-git-repo')

function downloadRepo(url, project) {
  download(`direct:${url}`, project, {clone:true}, function (err) {
    console.log(err)
  })
}

module.exports = downloadRepo
