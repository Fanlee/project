#! /usr/bin/env node

const { program } = require('commander')
const programHelp = require('../lib/core/help')
const programCommand = require('../lib/core/command')

programHelp(program)
programCommand(program)


program.parse(program.argv)