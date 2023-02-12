const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// create a function to access the object.
const printData = function(student) {
  console.log(`Name: ${student.name} Age: ${student.age}`);
};

// callback to use age sort.

const sortAge = function(students) {
  return students.sort((a , b)=> a.age - b.age);
};

const sortName = function(students) {
  return students.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
};

// link it all together

const sortedData = sortName(students);
// const sortedData = sortAge(students);

sortedData.forEach(student => printData(student));