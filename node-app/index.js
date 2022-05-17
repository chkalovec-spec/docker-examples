const fs = require('fs')

fs.writeFile('./myFile.txt', 'Node js', { encoding: 'UTF-8' }, (err) => {
  if (err) {
    console.err(err)
  } else {
    console.log('File saved!')
  }
})

setTimeout(() => {
  //for connect to the container
  process.exit(0)
}, 40000)
