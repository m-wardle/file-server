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

conn.setEncoding('utf8');

conn.on('data', (data) => {
  if (checkData(data)) {
    fs.writeFile(fileName, data, () => {
      fs.stat(fileName, (err, stat) => {
        console.log(`${fileName} received! ${stat.size} bytes total.`)
      })
    });
    
  } else {
    console.log('Server says: ', data);
  }
  
});

conn.on('connect', () => {
  conn.write('Hello from client!');
});

stdin.on('data', function(data) {
  conn.write(data);
  fileName = data.split(" ")[1].trim();
});
