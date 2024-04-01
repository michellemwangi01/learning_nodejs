const fs = require("fs"); //fs stands for file system

// console.log(fs);

//  --------------------- reading files ---------------------
// the method readFIle takes in 2 variables, ie the path to the file and then the callback function
//  it is also an asynchronous function meaning it only runs when the job is fully complete. which also means that the following code may be run while this one is still executing
fs.readFile("./docs/banks.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
console.log(
  "notice that this line of code runs and appears before the filecontent is displayed, even though it appears after it."
);

//  --------------------- writing files ---------------------
// This takes 3 arguments 1. pathname to file, text to overwrite existing text, call back funcion to execute after the work is complete,
// If the file does not exist, it will only be overwitten.
fs.writeFile(
  "./docs/banks.txt",
  "Equity,Barclays,Mpesa,Central bank of Africa,Equity\n",
  () => {
    console.log("File successfully written");
  }
);

// Use this to append instead of overwriting
fs.appendFile("./docs/banks.txt", "Jubilee\n", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log("File successfully updated" + data);
});

//  --------------------- directories ---------------------
fs.mkdir("./assets", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Folder successfully created");
});

fs.rmdir("./assets", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Folder removed");
});
//  --------------------- deleting files ---------------------
