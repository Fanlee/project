const programAction = require('./action')

function programCommand(program) { 
  program.command('create <peoject> [other...]')
  .alias('crt')
  .description('创建项目')
  .action(programAction)
}

module.exports = programCommand