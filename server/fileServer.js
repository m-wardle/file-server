const net = require('net');
const fetch = require("./fetch");
const checkData = require("./checkData");
const fs = require('fs');


const server = net.createServer();

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});

server.on('connection', (client) => {
  console.log('New client connected!');
  client.write('Hello there! Please enter desired file name in the following format: "File: [filename]"');
  client.setEncoding('utf8');
  client.on('data', (data) => {
    if(checkData(data)) {

      splitData = data.split(" ")

      // fetch(splitData[1].trim(), (data) => {
      //   client.write("File: " + data);
      // });
      let readStream = fs.createReadStream(splitData[1].trim());
      readStream.on("data", (datachunk) => {
        console.log(datachunk);
      })
    } else {
      console.log('Server says: ', data)
      // client.write('Ensure submission is in the proper format: "File: [filename]"')
    }
  });
});

