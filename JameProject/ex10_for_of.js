const name = 'Hello World'

for (const item of name) {
    console.log(item);
}

const money = [1005, 10_005, 100_005]
let sum = 0

for (let item of money) {
    item -= 5
    sum += item
}
console.log(sum);