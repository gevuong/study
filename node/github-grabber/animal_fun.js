const fs = require('fs');
const http = require('http');
const querystring = require('querystring');

// create a HTTP server object
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Hello World!"); // write response to client
  res.end(); // end response
}).listen(8000, () =>
    console.log('listening on 8000')
  ); // server object listens on port 8000

// fs.readFile is an async fcn. Callback provides an error obj (if it exists) and data from file. This order of callback is common in Node.
fs.readFile('./animals.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    // console.log(data);
    console.log("file is successfully read!");
  }
})

// sync version of readFile()
// let animal_text = fs.readFileSync('./animals.txt', 'utf-8')
// console.log(animal_text)


// returns a buffer object if encoding type is not stated, Buffers are instances of Buffer class in node, designed to handle raw binary data. Each buffer corresponds to raw memory allocated outside V8.
// fs.readFile('./animals.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })

// second argument provides data that should be written to file, and callback will only provide error obj (if it exists)
fs.writeFile('./example.txt', 'I will be written to example.txt', err => {
  if (err) {
    console.log(err);
  } else {
    console.log('file is successfully written!');
  }
})