const fs = require('fs');

// Install lodash
const lodash = require('lodash');
const output = lodash.without([1, 2, 3], 1); // to see if data is loaded
console.log(output);

// Create an array

const myPeople = [
  { name: "John Doe", age: 25 },
  { name: "Jane Doe", age: 20 },
  { name: 'Clancy', age: 43 },
  { name: 'Edna', age: 32 },
  { name: 'Lisa', age: 10 },
]

const people = lodash.map(myPeople, (person) => {
  console.log(person);
})

// Sort the array in a descending order
const arrayDescend = lodash.sortBy(myPeople, 'age').reverse();
console.log(arrayDescend);

// Find a the oldest and youngest
// youngest 
const youngest = lodash.head(lodash.map(lodash.sortBy(myPeople, 'age'), o => o.name + ' is ' + o.age));
console.log(youngest);
// oldest
const oldest = lodash.head(lodash.reverse(lodash.map(lodash.sortBy(myPeople, 'age'), o => o.name + ' is ' + o.age)));
console.log(oldest);

// remove oldest
const oldestIndex = lodash.findIndex(myPeople, (o) => {
  return o.name == 'Clancy';
});
console.log(oldestIndex);

myPeople.splice(2, 1);
console.log(myPeople);

// Add some objects to the array
const myPeople1 = [
  { name: "John Doe", age: 25 },
  { name: "Jane Doe", age: 20 },
  { name: 'Clancy', age: 43 },
  { name: 'Edna', age: 32 },
  { name: 'Lisa', age: 10 },
  { name: 'Philip', age: 10 },
  { name: 'Lili', age: 43 },
  { name: "Sara", age: 20 },
  { name: 'Tom', age: 32 },
  { name: "Jan", age: 25 }
]

// Group the people by age
const grouped = lodash.groupBy(myPeople1, (people) => {
  return people.age;
});
console.log(grouped);

// Create file named people.tx
fs.readFile('people.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});

fs.writeFile('people.txt', 'Rasha', (err) => {
  if (err) {
    throw err;
  }
  console.log('File is created successfuly.');
});

fs.appendFile('people.txt', 'create people list', (err) => {
  if (err) throw err;
  console.log('File is saved successfully.');
});

fs.open('people.txt', 'w', (err) => {
  if (err) throw err;
  console.log('File is opened in write mode.');
});

// (Challenge)
const entry = lodash.map(myPeople, p => p.name + " is " + p.age + " years old");
console.log(entry);

