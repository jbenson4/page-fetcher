const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');
const url = args[0];
const fileLocation = args[1];

const content = request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    return;
  }
  fs.writeFile(fileLocation, body, err => {
    if (err) {
      console.log(err)
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${fileLocation}`)
    }
  })
})