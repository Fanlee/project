const inquirer = require('inquirer')
const downloadRepo = require('./download')
const { framwork, framworkUrl } = require('../../config')

async function programAction(project) { 
  const answer= await inquirer.prompt([{
    type: 'list',
    name: 'framwork', 
    message: '请选择你要使用的框架',
    choices:framwork
  }])

  downloadRepo(framworkUrl[answer.framwork], project)
}

module.exports = programAction