const fs = require('fs');

const fetch = function(fileName, callback) {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      throw err;
    }
    callback(data)
  })
}



module.exports = fetch