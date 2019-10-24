const net = require('net');
const fs = require('fs');
const stdin = process.stdin;
stdin.setEncoding('utf8');
let fileName = "";
const checkData = require("./server/checkData");

const conn = net.createConnection({ 
  host: 'localhost', 
  port: 3000
});


conn.on('data', (data) => {
  // Buffer.from(data);
  if (fileName) {
    // fs.writeFile(fileName, data, () => {
    //   fs.stat(fileName, (err, stat) => {
    //     console.log(`${fileName} received! ${stat.size} bytes total.`)
    //   })
    // });
    
    data = Buffer.from(data);
    console.log(Buffer.isBuffer(data))
    let writeStream = fs.createWriteStream(fileName, {encoding: null, highWaterMark: 1280000000});
    // console.log(data.split(" "));
    writeStream.write(data);
    
  } else {
    conn.setEncoding('utf8');

    // console.log('Server says: ', data);
    console.log("Not buffer")
    
  }
  
});

conn.on('connect', () => {
  conn.setEncoding('utf8');

  conn.write('Hello from client!');
  
  conn.setEncoding(null)
});

stdin.on('data', function(data) {

  conn.write(data);
  fileName = data.split(" ")[1].trim();
});
