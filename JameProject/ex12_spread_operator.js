const array1 = ['iBlurMak', 1, 2, 3, 4]

const array2 = array1
console.log(array1)
console.log(array2)

array1.push(999)
console.log(array1)
console.log(array2)

// copy ข้อมูลโดยไม่ต้องเชื่อมโยงกัน
const array3 = [...array1]
array1.push('******')
console.log(array1);
console.log(array2);
console.log(array3);

const obj1 = { name: 'iBlurMak', age: 30 }
const obj2 = obj1
obj1.id = '123456789'

console.log(obj1);
console.log(obj2);

const obj3 = { ...obj1 }
obj1.role = 'Admin'

console.log(obj1);
console.log(obj2);
console.log(obj3);