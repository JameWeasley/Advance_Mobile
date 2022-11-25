const empID = '67890'
const empID2 = '12345'

console.log(empID.padStart(10, 'X'));

console.log(empID2.padEnd(10, 0))

console.log(empID.padStart(empID.length + 6, 'Number'))

const name = 'iBlurMak'
console.log(name.padStart(20));
console.log(JSON.stringify(name.padStart(10)));