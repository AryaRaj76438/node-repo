const path = require('path')
// console.log(path.sep) // seperator
// console.log()

// filepath from string
const filepath = path.join('user', 'admin', 'index.html');
// console.log(filepath);

const  parsePath = path.parse(filepath);
// console.log(parsePath);

const basePath = path.basename(filepath); 
console.log(basePath); // index.html

// absolute path
// const absolute = path.absolute(__dirname, 'arya', 'arya.html');
// console.log(absolute);