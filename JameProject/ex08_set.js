const set1 = new Set(['hello', 9, 9, 5, 5, 5, 1, 1])

console.log(set1);
console.log(set1.size);

set1.add(1234)
console.log(set1);
console.log(set1.size);

set1.add(1234).add(1234).add(45)
console.log(set1);
console.log(set1.size);

set1.delete(1234)
console.log(set1);
console.log(set1.size);

console.log(set1.has(1234));
console.log(set1.has('hello'));

set1.clear()
console.log(set1)
console.log(set1.size)