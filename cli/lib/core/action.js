const inquirer = require('inquirer')
const { framwork } = require('../../config')

function programAction(project, args) { 
  inquirer.prompt([{
    type: 'list',
    name: 'framwork', 
    message: '请选择你要使用的框架',
    choices:framwork
  }]).then(answer => { 
    console.log(answer)
  })
}

module.exports = programAction