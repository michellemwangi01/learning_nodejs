const persons = require("./modules"); // console.log(persons.ages);
const { ages } = require("./modules"); // console.log(ages);

const sayHello = (name) => {
  console.log(`Hello ${name}`);
};

const printNames = (persons) => {
  for (let num in persons) {
    sayHello(persons[num]);
  }
};

printNames(persons);

const intervalID = setInterval(() => {
  console.log("Hello Fam");
}, 3000);

setTimeout(() => {
  clearInterval(intervalID);
}, 4000);
// set timeout runs once after te specified amount of time
// set interval runs repeatedly after every specified interval.
// console.log(global);

console.log(__dirname); // prints the directory of the file wiithout the filename
console.log(__filename); // prints the directory of the file and filename
const os = require("os"); // get OS details
console.log(os.platform(), os.homedir());
