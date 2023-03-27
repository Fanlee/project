const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')

function downloadRepo(url, project) {
  const spinner = ora().start()
  spinner.text = '代码下载中，请稍等...'
  download(`direct:${url}`, project, { clone: true }, (err) => {
    if (!err) {
      spinner.succeed('代码下载成功')
      console.log(chalk.green.bold('Done!'), 'you run:')
      console.log(`cd ${project}`)
      console.log('npm install')
      console.log('npm run dev')
    } else {
      spinner.fail('代码下载失败')
    }
  })
}

module.exports = downloadRepo
