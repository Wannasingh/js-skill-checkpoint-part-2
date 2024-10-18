const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

const allPeople = [...techupPeople, ...techcoolPeople];

// เริ่มเขียนโค้ดตรงนี้
console.log(allPeople);
function filterEmployee (company) {
  return company.filter((employees) => employees.age <= 20)
  .map((employees) => employees)
}
console.log(filterEmployee(allPeople))
