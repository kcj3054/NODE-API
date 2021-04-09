// const https = require('http');   //module 사용
// https.createServer()

// const math = require('./math.js');

// const result = math.sum(1, 2)

// console.log(result);

// const fs = require('fs');    //readFileSync
// const data = fs.readFileSync('./data.txt', 'utf8')
// console.log(data)

const fs = require('fs');    //readFile (비동기)
const data = fs.readFile('./data.txt', 'utf8', function(err, data) {
    console.log(data)
})
console.log(data)
