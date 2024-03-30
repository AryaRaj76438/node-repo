const {readFileSync, writeFileSync} = require('fs')


const first = readFileSync('./Node/content/first.txt', 'utf8')
const second = readFileSync('./Node/content/second.txt', 'utf8')

// console.log(first, second)

writeFileSync('./Node/content/newFile.txt',`This is your result: ${first}, ${second}`)

// to append the given file 
writeFileSync('./Node/content/newFile.txt', 'This is appended line in your terminal', {flag:'a'})

const third = readFileSync('./Node/content/newFile.txt', 'utf8');
// console.log(third)