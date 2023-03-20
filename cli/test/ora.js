const ora = require('ora')
const spinner = ora().start()
spinner.text = '加载中...'

setTimeout(() => {
  // spinner.succeed('成功')
  // spinner.fail('失败')
  spinner.info('信息')
}, 3000);