const checkData = function(data) {
  splitData = data.split(" ");
  if (splitData[0] === "File:") {
    return true;
  } else {
    return false;
  }
}

module.exports = checkData