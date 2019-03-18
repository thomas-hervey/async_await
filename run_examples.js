/*
This is an async/await promise tutorial
This file can be run with the following options:
'promise', 'async', 'all'
The individual examples are all saved in their own files
*/

const { runPromise, runAsync, runAll } = require('./examples')

const runExamples = async (arg) => {
  try {
    switch (arg) {
      case 'promise':
        runPromise()
        break

      case 'async':
        runAsync()
        break

      case 'all':
        runAll()
        break

      default:
        break
    }
  } catch (error) {

  }
}

const arg = process.argv[2]
runExamples(arg)