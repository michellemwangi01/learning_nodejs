const names = [
  "John",
  "Emily",
  "Michael",
  "Sophia",
  "William",
  "Emma",
  "Alexander",
  "Olivia",
  "James",
  "Ava",
];

const ages = [25, 30, 40, 22, 35, 28, 33, 27, 45, 26];

const users = names.map((name, index) => ({
  ID: index + 1, // Assuming IDs start from 1
  name: name,
  age: ages[index],
}));

module.exports = { names, ages, users };
