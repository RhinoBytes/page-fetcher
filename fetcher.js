const request = require('request');
const fs = require('fs');


const arg1 = process.argv[2];
const arg2 = process.argv[3];

request(`${arg1}`, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  fs.writeFile(`${arg2}`, body, err => {
    if (err) {
      console.error(err);
    } else {
      const fileSize = Buffer.byteLength(body);
      console.log(`Downloaded and saved ${fileSize} bytes to ${arg2}`);
    }
  })
})

