const app = require('./app')
const yargs = require('yargs')

const flags = yargs.usage(`$0: Usage <cmd> [options]`)
.command({
      command: 'search',
      desc: 'search a keyword in a news database',
      builder: (yargs) => {
          return yargs.option('keyword', {
              alias: 'k',
              describe: 'keyword used to search for news articles'
          })
      },
      handler: (argv) => { app.search(argv.keyword) }
  })
  .help('help')
  .argv
