// streams allow us to start using data before it has finished loading
const fs = require("fs");
// ------------------------ READ STREAM ------------------------
const readStream = fs.createReadStream("./docs/longText.txt", {
  encoding: "utf-8",
});
// the below code will allow the data to be received and displayed in buffers as it comes instead of waiing to receive the entire code. The code below allows us to see each buffer as it comes in
readStream.on("data", (chunk) => {
  console.log("-------------- NEW CHUNK -------------");
  console.log(chunk);
});
// ------------------------ WRITE STREAM ------------------------
const writeStream = fs.createWriteStream("./docs/longText2.txt");
readStream.on("data", (chunk) => {
  writeStream.write("\n-------------- NEW CHUNK -------------\n");
  writeStream.write(chunk);
});

// above code can also be written as:
readStream.pipe(writeStream);
