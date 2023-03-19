const download = require('download-git-repo')

download('git@github.com:Fanlee/study-notes.git', './tmp',function(err) {
  console.log(err)
});