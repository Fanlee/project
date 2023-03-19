const download = require('download-git-repo')
var child_process = require('child_process')
download('direct:https://gitee.com/anyueleo/vue-template.git', './tmp', {clone:true}, function (err) {
  console.log(err)
});