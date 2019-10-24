const fs = require('fs');

// const fetch = function(fileName, callback) {
//   fs.readFile(fileName, (err, data) => {
//     if (err) {
//       throw err;
//     }
//     callback(data)
//   })
// }

const fetch = function(fileName, callback) {
  readStream = fs.createReadStream(fileName)
  callback(readStream)
}



module.exports = fetch